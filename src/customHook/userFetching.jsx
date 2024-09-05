import { useEffect, useRef, useState } from "react";
import axios from "axios";

export function useFetching(api) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState({
        page: 1, // trang hiện tại
        pageCount: 5, // số lượng trang hiển thị
        pageSize: 10, // số lượng phần tử trên 1 trang
        total: 50, // tổng số phần tử
    });

    const [count, setCount] = useState(0);
    const isMounted = useRef(true);
    useEffect(() => {
        const controller = new AbortController();
        isMounted.current = true;

        api(page.page, page.pageSize, controller.signal)
            .then((res) => {
                if (isMounted.current) {
                    setData(res);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (!axios.isCancel(err)) {
                    if (isMounted.current) {
                        setError(err);
                        setLoading(false);
                    }
                }
            });

        return () => {
            isMounted.current = false;
            controller.abort();
        };
    }, [api, page.page, page.pageSize, count]);

    function loadPage(page, pageSize) {
        setLoading(true);
        setPage((prev) => {
            return {
                ...prev,
                page: page,
                pageSize: pageSize,
            };
        });
    }
    console.log(page);

    function nextPage() {
        if (page.page < page.pageCount) {
            setLoading(true);
            setPage((prev) => {
                return { ...prev, page: prev.page + 1 };
            });
        }
    }
    function prevPage() {
        if (page.page > 1) {
            setLoading(true);
            setPage((prev) => {
                return { ...prev, page: prev.page - 1 };
            });
        }
    }

    function reload() {
        setLoading(true);
        setCount(count + 1);
        setError(null);
    }

    return { data, loading, error, page, loadPage, nextPage, prevPage, reload };
}
