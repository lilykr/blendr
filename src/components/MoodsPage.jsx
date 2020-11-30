import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardsContainerMood = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MoodCard = styled.div`
  height: 280px;
  width: 400px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

const TitleMoodCard = styled.h1`
  position: absolute;
  z-index: 3;
  color: white;
  text-align: center;
  font-size: 30px;
`;

const Image = styled.img`
  position: absolute;
  height: 280px;
  width: 400px;
  border-radius: 10px;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  height: 280px;
  width: 400px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 47%);
  border-radius: 10px;
`;

const Title = styled.h1`
  display: flex;
  text-align: center;
  font-weight: bold;
  color: #89c0a9;
  font-size: 80px;
  justify-content: center;
  align-items: center;
`;

function MoodsPage() {
  return (
    <div className="mood">
      <Title>Moods</Title>
      <CardsContainerMood>
        <Link to="/moods/dinner-with-friends">
          <MoodCard>
            <Image
              src="https://tinyurl.com/y5zh2rb8"
              alt="dinner with friends"
            />
            <Overlay />
            <TitleMoodCard>Dinner with friends</TitleMoodCard>
          </MoodCard>
        </Link>

        <Link to="/moods/healthy">
          <MoodCard>
            <Image src="https://tinyurl.com/y4b4l7nz" alt="healthy" />
            <Overlay />
            <TitleMoodCard>Healthy</TitleMoodCard>
          </MoodCard>
        </Link>

        <Link to="/moods/international-cuisine">
          <MoodCard>
            <Image
              src="https://tinyurl.com/yyvq6vpx"
              alt="international cuisine"
            />
            <Overlay />
            <TitleMoodCard>International cuisine</TitleMoodCard>
          </MoodCard>
        </Link>

        <Link to="/moods/spicy">
          <MoodCard>
            <Image src="https://tinyurl.com/y3khwo8g" alt="spicy food" />
            <Overlay />
            <TitleMoodCard>Spicy food</TitleMoodCard>
          </MoodCard>
        </Link>

        <Link to="/moods/comfort-food">
          <MoodCard>
            <Image src="https://tinyurl.com/y6lya7ml" alt="comfort food" />
            <Overlay />
            <TitleMoodCard>Comfort food</TitleMoodCard>
          </MoodCard>
        </Link>

        <Link to="/moods/meat-lover">
          <MoodCard>
            <Image src="https://tinyurl.com/y4oyql75" alt="meat lover" />
            <Overlay />
            <TitleMoodCard>Meat lover</TitleMoodCard>
          </MoodCard>
        </Link>

        <Link to="/moods/local-cuisine">
          <MoodCard>
            <Image src="https://tinyurl.com/y2tv4djm" alt="local cuisine" />
            <Overlay />
            <TitleMoodCard>Local cuisine</TitleMoodCard>
          </MoodCard>
        </Link>
      </CardsContainerMood>
    </div>
  );
}

export default MoodsPage;
