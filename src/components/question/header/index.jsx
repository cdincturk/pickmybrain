import React from "react";
import { TbEdit } from "react-icons/tb";
import { BsTrashFill } from "react-icons/bs";
import { Button } from "../../button";

function Header() {
  return (
    <div className="flex justify-between">
      <div className="user-detail flex items-center gap-2">
        <img
          className="w-8 h-8 rounded-lg"
          src="https://picsum.photos/200/300"
          alt="username"
        />
        <h3 className="text-sm">username</h3>
        <span className="text-sm">created at</span>
      </div>
      <div className="action-buttons gap-4 flex">
        <Button className="flex items-center gap-1" variant="warning">
          <BsTrashFill />
          <span className="text-xs">Delete</span>
        </Button>
        <Button>
          <TbEdit />
        </Button>
        <Button>
          <TbEdit />
        </Button>
      </div>
    </div>
  );
}

export { Header };
