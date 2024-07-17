import React, { useState, useEffect } from "react";
import {
  db,
  collection,
  getDocs,
} from "../firebase";
import moment from "moment";
import { Table } from "antd";

const DataTable = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "Ip",
      dataIndex: "ip",
      key: "ip",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => moment(text).format("YYYY-MM-DD hh:mm"),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getDocs(collection(db, "users"));
        const newData = fetchedData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        // Sort messages by createdAt date in descending order
        const sortedData = newData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setData(sortedData)
      } catch (error) {}
    };

    fetchData()
  });

  return(
    <>
        <Table
            dataSource={data}
            columns={columns}
            scroll={{y: 300, x: 500}}
            rowKey='id'
            style={{
                width: '90%',
                maxWidth: '900px',
                margin: 'auto'
            }}
        />
    </>
  );
};

export default DataTable;
