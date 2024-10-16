import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: new Date(),
          title: "Arm chair",
          img: "chair.png",
          desc: "lorem lorem lorem dolor sit amet, consectetur adipisicing",
          category: "chairs",
          price: "49.99",
        },
        {
          id: new Date(),
          title: "table",
          img: "table.png",
          desc: "lorem lorem lorem dolor sit amet, consectetur adipisicing",
          category: "tables",
          price: "109.99",
        },
        {
          id: new Date(),
          title: "Sofa",
          img: "sofa.png",
          desc: "lorem lorem lorem dolor sit amet, consectetur adipisicing",
          category: "sofas",
          price: "249.99",
        },
        {
          id: new Date(),
          title: "TV",
          img: "tv.png",
          desc: "lorem lorem lorem dolor sit amet, consectetur adipisicing",
          category: "tv",
          price: "149.99",
        },
        {
          id: new Date(),
          title: "Door",
          img: "door.png",
          desc: "lorem lorem lorem dolor sit amet, consectetur adipisicing",
          category: "doors",
          price: "89.99",
        },
        {
          id: new Date(),
          title: "oven",
          img: "oven.png",
          desc: "lorem lorem lorem dolor sit amet, consectetur adipisicing",
          category: "ovens",
          price: "1149.99",
        },
        {
          id: new Date(),
          title: "Car",
          img: "car.png",
          desc: "lorem lorem lorem dolor sit amet, consectetur adipisicing",
          category: "cars",
          price: "20049.99",
        },
      ],
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  chooseCategory(category) {
    if (category === "all") {
      this.setState({
        currentItems: this.state.items,
      });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(
        (item) => item.category === category
      ),
    });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
}

export default App;
