import { useFetching } from "@/customHook/userFetching";
import { render } from "@/common/renderHelper";

import { Skeleton, Pagination, Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { getTasks } from "@/services/task";

export default function TaskList(props) {
    const { data, loading, error, page, loadPage, nextPage, prevPage, reload } =
        useFetching(getTasks);

    const element = (
        <div className="list">
            <Pagination
                showSizeChanger
                current={page.page} // trang hiện tại đang ở trang số mấy
                total={page.total} // tổng số phần tử
                onChange={(currentPage, pageSize) => {
                    loadPage(currentPage, pageSize);
                }}
            />
            <h3 className="list-title">{props.title}</h3>
            <ul className="list-items">
                {loading
                    ? Array(10)
                          .fill(0)
                          .map((item, index) => {
                              return <Skeleton key={index} active />;
                          })
                    : data?.map((item) => {
                          return <li key={item?.id}>{item?.name}</li>;
                      })}
            </ul>
            <button className="add-card-btn btn">Add a card</button>
        </div>
    );

    let btnReload = (
        <Button
            icon={<ReloadOutlined />}
            onClick={() => {
                reload();
            }}
        >
            Reload
        </Button>
    );
    return render(loading, error, element, btnReload);
}
