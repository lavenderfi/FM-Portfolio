import { Card } from "react-bootstrap";

export default function Projects() {
  return (
    <div className="projects">
      <Card>
        <Card.Body>
          <Card.Title>Junior Phase Final Project</Card.Title>
          <Card.Text>
            In this cumulative project of the Junior Phase at Grace Hopper, we built a functional CRUD application. We
            worked to set up our own data using Sequelize and a seed file, and
            routing it to our front end, where we used React and Redux to
            communicate with our back-end and display a list of campuses and
            students. I also used React and Bootstrap to create a responsive
            webpage that displayed, added, edited, and deleted content.
          </Card.Text>
        </Card.Body> 
         <iframe
        src="https://www.youtube.com/embed/VBvD4EOo9Xc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Grace Shopper</Card.Title>
          <Card.Text>
            I worked within a team to create an online shopping website, with populated products, and a functioning cart that a user can add and remove items from, as well as checkout. We used PostgreSQL and Sequelize to create a database of users, orders, carts, products, and categories. Some of the added features we were able to complete in the limited time we had were product filtering by category, a functioning search bar, star ratings for each product if applicable, and a way to add reviews to products. Users with the admin privilege are also able to edit the product's name, price, and quantity. We also implemented a payment system upon checkout using the Stripe API. This project pushed me as far as possible within the week and a half we were given to complete it, and is still a work in progress. 
            This project was deployed live using Heroku. In the future, I would like to add user and admin account pages where users can edit their user information, and admins can see and edit any orders and users that they need to.
          </Card.Text>
          <Card.Link href='https://github.com/Sassy-Software-Engineers/Grace-Shopper'>Github</Card.Link>
          <Card.Link href='https://every-daisy.herokuapp.com/'>Website</Card.Link>
        </Card.Body> 
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Webby</Card.Title>
          <Card.Text>
            Given the ability to create any app we desired for our capstone project, my team decided to make a mobile-friendly social media web application to help people build communities based on their interests. The goal of this is to bring people together and give them the opportunity to explore hobbies they are interested in with others. This app includes a functional chat component where users can talk to each other one-to-one or in groups, user profiles with information on their availability, top 5 interests they want to explore, and whether they want to meet in-person or online. Users are able to find others through an interactive Network graph that displays themselves at the center, with their interests branching out, and other users connected through each interest. The database and authorization are managed through Firebase, with React to display our components. We used D3 to display our network graph, and Material UI to style our components.
             This project was started in mid-August of 2022.
          </Card.Text>
          <Card.Link href='https://github.com/THEM-exclamationpoint/Webby'>Github</Card.Link>
        </Card.Body> 
      </Card>
    
    </div>
  );
}
