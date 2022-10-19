import React from "react";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import { faker } from "@faker-js/faker";

const MainPage = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
       <h4>Warning!</h4>
        Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          image={faker.image.avatar()}
          author="Sam"
          date="7:00 PM"
          text="This is a nice post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          image={faker.image.avatar()}
          author="Alex"
          date="7:10 AM"
          text="Good for all"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          image={faker.image.avatar()}
          author="Jane"
          date="8:00 PM"
          text="Very nice to read"
        />
      </ApprovalCard>
    </div>
  );
};

export default MainPage;
