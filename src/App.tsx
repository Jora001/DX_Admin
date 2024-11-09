import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Layout from './pages/Layout';
import UserAll from './pages/User/UserAll.tsx';
import Dashboard from "./pages/Dashboard.tsx";
import UserCreate from "./pages/User/UserCreate.tsx";
import UserUpdate from "./pages/User/UserUpdate.tsx";
import UserDelete from "./pages/User/UserDelete.tsx";
import TeacherDelete from "./pages/Teacher/TeacherDelete.tsx";
import TeacherAll from "./pages/Teacher/TeacherAll.tsx";
import TeacherCreate from "./pages/Teacher/TeacherCreate.tsx";
import TeacherUpdate from "./pages/Teacher/TeacherUpdate.tsx";
import GroupAll from "./pages/Group/GroupAll.tsx";
import GroupCreate from "./pages/Group/GroupCreate.tsx";
import GroupUpdate from "./pages/Group/GroupUpdate.tsx";
import GroupDelete from "./pages/Group/GroupDelete.tsx";
import TaskCreate from "./pages/Tasks/TaskCreate.tsx";
import TaskUpdate from "./pages/Tasks/TaskUpdate.tsx";
import TaskDelete from "./pages/Tasks/TaskDelete.tsx";
import CourseAll from "./pages/Course/CourseAll.tsx";
import CourseCreate from "./pages/Course/CourseCreate.tsx";
import CourseUpdate from "./pages/Course/CourseUpdate.tsx";
import CourseDelete from "./pages/Course/CourseDelete.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                <Route path="/" element={<Layout/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                </Route>
                <Route path="/user" element={<Layout/>}>
                    <Route path="all" element={<UserAll/>}/>
                    <Route path="create" element={<UserCreate/>}/>
                    <Route path="update" element={<UserUpdate/>}/>
                    <Route path="delete" element={<UserDelete/>}/>
                </Route>
                <Route path="/teacher" element={<Layout/>}>
                    <Route path="all" element={<TeacherAll/>}/>
                    <Route path="create" element={<TeacherCreate/>}/>
                    <Route path="update" element={<TeacherUpdate/>}/>
                    <Route path="delete" element={<TeacherDelete/>}/>
                </Route>
                <Route path="/group" element={<Layout/>}>
                    <Route path="all" element={<GroupAll/>}/>
                    <Route path="create" element={<GroupCreate/>}/>
                    <Route path="update" element={<GroupUpdate/>}/>
                    <Route path="delete" element={<GroupDelete/>}/>
                </Route>
                <Route path="/task" element={<Layout/>}>
                    <Route path="create" element={<TaskCreate/>}/>
                    <Route path="update" element={<TaskUpdate/>}/>
                    <Route path="delete" element={<TaskDelete/>}/>
                </Route>
                <Route path="/course" element={<Layout/>}>
                    <Route path="all" element={<CourseAll/>}/>
                    <Route path="create" element={<CourseCreate/>}/>
                    <Route path="update" element={<CourseUpdate/>}/>
                    <Route path="delete" element={<CourseDelete/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
