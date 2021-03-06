import React from "react";
import { userRequsets } from "../../../services/userFetch";
import Row from "../../Components/Row/Row";
import MyPostCard from "./MyPostCard";
import Column from "../../Components/Column/Column";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

class MyPosts extends React.Component {
  state = {
    loading: true
  };

  getPosts() {
    userRequsets.myPosts(posts => this.setState({ posts, loading: false }));
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    }

    return (
      <Row>
        <Column basis={3}>
          <Link to="/createpost">
            <Button text="Create Post" color="green" />
          </Link>
        </Column>
        {this.state.posts.map((post, key) => (
          <MyPostCard key={key} reload={() => this.getPosts()} post={post} />
        ))}
      </Row>
    );
  }
}

export default MyPosts;
