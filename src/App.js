import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import SelectMenu from "./pages/select/SelectMenu";
import CategoryRank from "./pages/rank/CategoryRank";
import SearchCardCompany from "./pages/search/SearchCardCompany";
import MyList from "./pages/myList/MyList";
import Introduction from "./pages/introduction/Introduction";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />

        {/*===== Home으로 가는 코드 추가함 =====*/}
        <Route path="/Home" element={<Home/>}/>


        <Route path="/select-menu" element={<SelectMenu />} />
        <Route path="/category-rank" element={<CategoryRank />} />
        <Route path="/search-card-company" element={<SearchCardCompany />} />
        <Route path="/mylist" element={<MyList />} />

        {/* 원본 코드 */}
        <Route path="/introduction" element={<Introduction />} />

        {/* 내가 수정해본 코드 */}
        <Route path="/introduction" element={<Introduction />} 
          exact Component={<Home/>}
        />
      </Routes>
    </div>
  );
}

export default App;