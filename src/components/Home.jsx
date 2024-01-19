import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const AlbumCard = ({ album }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card>
        <Card.Img variant="top" src={album.album.cover_medium} />
        <Card.Body>
          <Card.Title>{album.title}</Card.Title>
          <Card.Text>Artist: {album.artist.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const AlbumList = ({ albums }) => {
  return (
    <Row>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </Row>
  );
};
const Home = ({ artist }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`, {
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0", // Sostituisci con la tua chiave API
          },
        });
        if (response.ok) {
          const result = await response.json();
          setAlbums(result.data || []); // Assicurati che 'result.data' contenga un array di album
        } else {
          throw new Error("Errore durante la richiesta API");
        }
      } catch (error) {
        console.error("Errore:", error);
      }
    };

    fetchData();
  }, [artist]);

  return (
    <Container>
      <h2>Album Gallery</h2>
      <AlbumList albums={albums} />
    </Container>
  );
};

export default Home;
