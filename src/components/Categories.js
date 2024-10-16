import React, { Component } from "react";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "chairs",
          name: "Стулья",
        },
        {
          key: "tables",
          name: "Столы",
        },
        {
          key: "sofas",
          name: "Диваны",
        },
        {
          key: "tv",
          name: "Телевизоры",
        },
        {
          key: "doors",
          name: "Двери",
        },
        {
          key: "ovens",
          name: "Духовки",
        },
        {
          key: "cars",
          name: "Машины",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((item) => {
          return (
            <div
              key={item.key}
              onClick={() => {
                this.props.chooseCategory(item.key);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Categories;
