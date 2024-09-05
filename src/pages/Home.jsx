import React from "react";
import TaskList from "@/components/TaskList";
import BaseLayout from "@/components/TaskList/Layout/BaseLayout";
function Home() {
    return (
        <BaseLayout>
            <section className="lists-container">
                <TaskList title="Danh sách công việc" />
                <button className="add-list-btn btn">Add a list</button>
            </section>
        </BaseLayout>
    );
}

export default Home;
