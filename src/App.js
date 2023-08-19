import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import SelectMenu from "./pages/select/SelectMenu";
import CategoryRank from "./pages/rank/CategoryRank";
import CardRank from "./pages/rank/CardRank";
import SearchCardCompany from "./pages/search/SearchCardCompany";
import ExtraCardCompany from "./pages/search/ExtraCardCompany"
import CardDetail from "./pages/detail/CardDetail";
import MyList from "./pages/myList/MyList";
import Introduction from "./pages/introduction/Introduction";

function App() {
  return (
    <div>
      <Routes>
        /** 시작 페이지 */
        <Route index element={<Home />} />
        /** 서비스 선택 페이지 */
        <Route path="/select-menu" element={<SelectMenu />} />
        /** 분야별 순위 페이지 */
        <Route path="/category-rank" element={<CategoryRank />} />
        /** 주요 카드사 선택 페이지 */
        <Route path="/search-card-company" element={<SearchCardCompany />} />
        /** 기타 카드사 선택 페이지 */
        <Route path="/extra-card" element={<ExtraCardCompany />} />
        /** 카드 순위 페이지 */
        <Route path="card-rank" element={<CardRank />} />
        /** 마이리스트 페이지 */
        <Route path="/mylist" element={<MyList />} />
        /** 카드 상세 페이지 */
        <Route path="/card-detail" element={<CardDetail />} />
        /** 서비스 소개 페이지 */
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </div>
  );
}

export default App;
