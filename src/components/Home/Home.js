import React from "react";
import TaskList from "../task/TaskList/TaskList"
import { HomeBody, HomeTitle } from "./HomeStyled";


export default function Home({ user, isUserLoaded, groups, isGroupsLoaded }) {

  return (
    <>
      { isUserLoaded ?
        <>
        <HomeBody>
        <HomeTitle>Hi, {user.name} {user.surname}! How are you?</HomeTitle>
        </HomeBody>
        <TaskList
          isPersonal={true}
          groupId={0}
          groups={groups}
          isGroupsLoaded={isGroupsLoaded}
          />
        </>
      : null
      }
    </>
  );
}