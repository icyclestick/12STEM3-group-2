import { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class EditChicken extends Component {
  constructor(props) {
    super(props);

    this.onChangeTag = this.onChangeTag.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeTargetWeight = this.onChangeTargetWeight.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      tag: "",
      type: "",
      weight: "",
      targetWeight: "",
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          tag: response.data.tag,
          type: response.data.type,
          weight: response.data.weight,
          targetWeight: response.data.targetWeight,
          date: new Date(response.data.date),
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
            username: response.data[0].username,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeTag(e) {
    this.setState({
      tag: e.target.value,
    });
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }
  onChangeWeight(e) {
    this.setState({
      weight: e.target.value,
    });
  }
  onChangeTargetWeight(e) {
    this.setState({
      targetWeight: e.target.value,
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const chickenData = {
      tag: this.state.tag,
      type: this.state.type,
      weight: this.state.weight,
      targetWeight: this.state.targetWeight,
      username: this.state.username,
      date: this.state.date,
    };
    console.log(chickenData);
    window.location = "/list";
    axios
      .post(
        `http://localhost:5000/chicken/update/` +
          this.props.add.match.params.id,
        chickenData
      )
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
    console.log(this.params.add.match.params.id);
  }

  render() {
    return (
      <div className="form-components">
        <h3 className="calculator-title">Edit Chicken!</h3>
        <form onsubmit="return false;">
          <label
            htmlFor="user"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Username:{" "}
          </label>
          <select
            ref="userInput"
            className="form-control"
            name="user"
            required
            value={this.state.username}
            onChange={this.onChangeUsername}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
          >
            {this.state.users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="tag"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tag
              </label>
              <input
                name="tag"
                onChange={this.onChangeTag}
                value={this.state.tag}
                type="text"
                id="tag"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="0000"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Type
              </label>
              <input
                name="type"
                onChange={this.onChangeType}
                value={this.state.type}
                type="text"
                id="type"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Darag Chicken"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="weight"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Weight
              </label>
              <input
                name="weight"
                onChange={this.onChangeWeight}
                value={this.state.weight}
                type="text"
                id="weight"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="15kg"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="target_weight"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Target Weight
              </label>
              <input
                name="targetWeight"
                onChange={this.onChangeTargetWeight}
                value={this.state.targetWeight}
                type="text"
                id="target_weight"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="20kg"
                required=""
              />
            </div>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
            <button
              type="button"
              onClick={this.handleSubmit}
              value="Edit Chicken"
              class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
