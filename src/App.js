import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Student from './components/Student'
import Faculty from './components/Faculty'
import Admin from './components/Admin'
import AddStudent from './components/AddStudent'
import AddFaculty from './components/AddFaculty'
import GetStudents from './components/GetStudents'
import GetStudent from './components/GetStudent'
import GetFaculty from './components/GetFaculty'
import UpdateStudent from './components/UpdateStudent'
import GetFaculties from './components/GetFaculties'
import UpdateFaculty from './components/UpdateFaculty'
import StudNav from './components/StudNav'
import FacNav from './components/FacNav'
import NavStuds from './components/NavStuds'
import NavFacs from './components/NavFacs'
import GetCourses from './components/GetCourses'
import NavCourse from './components/NavCourse'
import AddCourse from './components/AddCourse'
import UpdateCourse from './components/UpdateCourse'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path='/student' element={<StudNav />}/>
        <Route path='/faculty' element={<FacNav />}/>
        <Route path='/get-students' element={<NavStuds />}/>
        <Route path='/update-student' element={<UpdateStudent />}/>
        <Route path='/get-faculties' element={<NavFacs />}/>
        <Route path='/get-courses' element={<NavCourse />}/>
        <Route path='/admin' element={<Admin />}>
          <Route path='student' element={<Student />}/>
          <Route path='faculty' element={<Faculty />}/>
          <Route path='get-student' element={<GetStudent />}/>
          <Route path='get-students' element={<GetStudents />}/>
          <Route path='add-student' element={<AddStudent />}/>
          <Route path='update-student' element={<UpdateStudent />}/>
          <Route path='get-faculty' element={<GetFaculty />}/>
          <Route path='get-faculties' element={<GetFaculties />}/>
          <Route path='add-faculty' element={<AddFaculty />}/>
          <Route path='update-faculty' element={<UpdateFaculty />}/>
          <Route path='get-courses' element={<GetCourses />}/>
          <Route path='add-course' element={<AddCourse />}/>
          <Route path='update-course' element={<UpdateCourse />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
