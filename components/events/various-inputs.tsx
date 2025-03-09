"use client";

import { ChangeEvent } from "react";

export function VariousInputs() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("onChangeValue:",e.target.value);
  }

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeChecked",e.target.checked);
  }

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeFiles",e.target.files);
  }

  return (
    <div>
      <p>VariousInputs</p>
      <div>
        <input type="text" onChange={onChangeValue} placeholder="enter some texts" defaultValue="Hello" />
        <input type="password" placeholder="enter your password" />
        <input type="email" placeholder="enter email address" />
        <input type="range" />
        <input type="button" value="I'm a button" />
        <input type="checkbox" value="I'm a checkbox" onChange={onChangeChecked} defaultChecked />
        <input type="radio" value="I'm a radio" defaultChecked />
        <input type="file" onChange={onChangeFiles} multiple accept="images/*" />
      </div>
    </div>
  );
}
