import Image from "next/image";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <ul className="list-disc pl-10 pr-4">
          <li className="list-disc">
            <div>Lorem ipsum dolor sit amet.</div>
          </li>
          <li>
            <div>Facilis ad at ut cupiditate.</div>
          </li>
          <li>
            <div>Quisquam ipsum delectus alias in.</div>
          </li>
          <li>
            <div>Ab deleniti nulla rem soluta.</div>
          </li>
          <li>
            <div>Facilis ducimus harum optio provident.</div>
          </li>
          <li>
            <div>Eum commodi nostrum eos quo!</div>
          </li>
          <li>
            <div>Odit animi ex vitae at.</div>
          </li>
          <li>
            <div>Quae nihil doloremque quibusdam voluptate.</div>
          </li>
          <li>
            <div>Id repellat sunt animi odit!</div>
          </li>
          <li>
            <div>Nesciunt blanditiis nulla aut vitae!</div>
          </li>
        </ul>
      </main>
    </div>
  );
}
