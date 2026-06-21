import { useEffect, useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import SearchForm from "./components/SearchForm";
import { apiRequest } from "./backend/ApiRequest";

/*
[
    { id: "e1b4", checked: false, item: "ကုန်စုံဆိုင်ဝယ်ရန်" },
    { id: "9a2c", checked: false, item: "ခွေးအပြင်လိုက်ပတ်ရန်" },
    { id: "4f7d", checked: false, item: "စာအုပ်တစ်ခန်းဖတ်ရန်" },
    { id: "3c8e", checked: false, item: "မီးဖိုချောင်ဘေစင်ပြင်ရန်" },
    { id: "7b1a", checked: false, item: "ဘဏ်သို့ဖုန်းဆက်ရန်" },
  ]
 */

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const BACKEND_URL = "http://localhost:3500/items";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(BACKEND_URL);
        if (!response.ok) throw Error("Data can't be fetched...");
        const listItems = await response.json();
        // console.log(`items ${listItems}`);
        setItems(listItems);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);
  console.log(items);

  const addItem = async (item) => {
    const id = Date.now().toString();
    const newItem = [...items, { id, checked: false, item }];
    setItems(newItem);

    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "appliation/json",
      },
      body: JSON.stringify(newItem),
    };
    const result = await apiRequest(BACKEND_URL, postOption);
    if (result) setFetchError(result);
  };

  const handleCheck = (id) => {
    const updateItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setItems(updateItems);
  };

  const handleDelete = (id) => {
    const updateItems = items.filter((item) => item.id !== id);
    setItems(updateItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem;
  };

  return (
    <>
      <Header />
      <AddForm
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchForm searchItem={searchItem} setSearchItem={setSearchItem} />
      {isLoading && (
        <p className="text-2xl text-black text-center">Loading Items...</p>
      )}
      {fetchError && (
        <p className="text-red-800 text-lg">{`Error : ${fetchError}`}</p>
      )}

      {!isLoading && !fetchError && (
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(searchItem.toLocaleLowerCase()),
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      )}
      {/* <UseEffectPractice /> */}

      <Footer />
    </>
  );
}

export default App;
