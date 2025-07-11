import "./App.css";
import Stepper from "./Components/ReactStepper/Stepper";
// import NestedCheckBox from "./Components/NestedCheckbox";
// import VirtualizedList from "./Components/VirtualizedList/VirtualizedList";
// import { virtualizedListData } from "./utils/constant";
// import DayView from "./Components/GoogleCalendar/DayView";
// import InfiniteScroll from "./Components/InfiniteScroll/InfiniteScroll";
// import AutoComplete from "./Components/AutoCompleteSearchBar";
// import FileExplorer from "./Components/FileExplorer";
// import Otp from "./Components/OTP/Otp";
// import ProgressBar from "./Components/ProgressBar";
// import StarRating from "./Components/StarRating/StarRating";
// import Pagination from "./Components/Pagination";
// import TabForm from "./Components/TabFormComponent/TabForm";

function App() {
  return (
    <div className="app">
      {/* <FileExplorer />
      <ProgressBar />
      <AutoComplete />
      <StarRating starCount={10} />
      <Otp />
      <Pagination />
      <TabForm /> */}
      {/* // Turn off the strict mode for the infinite scroll to work properly */}
      {/* <InfiniteScroll /> */}
      {/* <DayView /> */}
      {/* <VirtualizedList
        list={virtualizedListData}
        height={400}
        width={300}
        itemHeight={35}
      /> */}
      {/* <NestedCheckBox /> */}
      <Stepper />
    </div>
  );
}

export default App;
