import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <ul>
      <li>
        <Link to="/" activeStyle={{ color: 'red' }}>Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Layout>
);

export default AboutPage
