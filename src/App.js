import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import SelectMenu from "./pages/select/SelectMenu";
import SearchCardCompany from "./pages/search/SearchCardCompany";
import CardRank from "./pages/rank/CardRank";
import CategoryRank from "./pages/rank/CategoryRank";
import CardDetail from "./pages/detail/CardDetail";
import MyList from "./pages/myList/MyList";
import Introduction from "./pages/introduction/Introduction";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/select-menu" element={<SelectMenu />} />
        <Route path="/search-card-company" element={<SearchCardCompany />} />
        <Route path="/card-rank" element={<CardRank />} />
        <Route path="/category-rank" element={<CategoryRank />} />
        <Route path="/card-detail" element={<CardDetail />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </div>

    // <CardDetail />
  );
}

export default App;
