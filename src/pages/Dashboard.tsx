import { useEffect, useState } from "react";
import { Avatar, Typography } from "@mui/joy";
import Layout from "../layout/layout.tsx";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Table } from "antd";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (pageNum: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.freeapi.app/api/v1/public/randomusers?page=${
          pageNum + 1
        }&limit=15`,
      );

      const json = await res.json();

      setUsers(json.data.data);
      setTotalPages(json.data.totalPages);
      setTotalItems(json.data.totalItems);
      setCurrentPage(json.data.page);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const handlePageChange = (event: { selected: number }) => {
    setPage(event.selected);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Avatar",
      dataIndex: "picture",
      key: "picture",
      render: (pic: any) => <Avatar src={pic.thumbnail} />,
    },
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      render: (name: any) => `${name.title} ${name.first} ${name.last}`,
    },
    {
      title: "Login",
      dataIndex: "login",
      key: "login",
      render: (login: any) => login.username,
    },
    {
      title: "Password",
      dataIndex: "login",
      key: "password",
      render: (login: any) => login.password,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Country",
      dataIndex: "location",
      key: "country",
      render: (loc: any) => loc.country,
    },
    {
      title: "City",
      dataIndex: "location",
      key: "city",
      render: (loc: any) => loc.city,
    },
    {
      title: "State",
      dataIndex: "location",
      key: "state",
      render: (loc: any) => loc.state,
    },
    {
      title: "Post Code",
      dataIndex: "location",
      key: "postcode",
      render: (loc: any) => (
        <span className="text-green-600">{loc.postcode}</span>
      ),
    },
  ];

  return (
    <Layout>
      <Typography level="h2" sx={{ mb: 2 }}>
        Users List
      </Typography>

      <Table
        dataSource={users}
        columns={columns}
        loading={loading}
        rowKey={(user: any) => user.id}
        pagination={false}
        footer={() => (
          <>
            <div className={"flex items-center justify-between"}>
              <div>
                <div className="gap-4 flex justify-between items-center mb-3 text-gray-700">
                  <div
                    className={
                      "text-2xl flex justify-between items-center gap-4"
                    }
                  >
                    <p className={"font-bold"}>Page:</p>
                    <span className={"text-green-600 text-[20px] font-bold"}>
                      {currentPage} /{totalPages}
                    </span>
                  </div>
                  <div className={"text-2xl"}>
                    <span className={"font-bold"}>Total users: </span>
                    <span className={"text-[20px] font-bold text-green-600"}>
                      {totalItems}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <ReactPaginate
                  previousLabel={
                    <button className="bg-white text-black shadow py-2 px-5 rounded-full flex items-center gap-1 justify-center">
                      <ChevronLeft />
                      Previous
                    </button>
                  }
                  nextLabel={
                    <button className="bg-white text-black shadow py-2 px-5 rounded-full flex items-center gap-1 justify-center">
                      Next <ChevronRight />
                    </button>
                  }
                  breakLabel="..."
                  pageCount={totalPages}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageChange}
                  pageClassName="list-none"
                  activeClassName="!w-10 !h-10 !flex !items-center !justify-center"
                  pageLinkClassName="w-10 h-10 flex items-center justify-center rounded-full border text-blue-600 text-lg transition"
                  activeLinkClassName="!bg-green-600 !text-white !border-green-600"
                  forcePage={page}
                  className="flex justify-end gap-2 items-center"
                />
              </div>
            </div>
          </>
        )}
      />
    </Layout>
  );
}
