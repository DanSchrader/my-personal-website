import styled, { css } from 'styled-components';
import data from '../data/data';
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";

export default function TopicCards () {
const [showTopic, setShowTopic] = useState(false);
const [topicList, setTopicList] = useState(data);

    return (
        <TopicCardWrapper>
        <TopicButtonList>
            {topicList.map(({ _id, button }) => {
                return (
                    <TopicButtonItem key={_id}>
                        <CardButtonOpen isShown={showTopic} onClick={() => {
                             setTopicList((topicList) =>
                             topicList.filter(
                               (topic) => topic._id === _id
                             )
                           );
                            setShowTopic(!showTopic);
                        }}>{button}</CardButtonOpen>
                        </TopicButtonItem>
                )
            })}
        </TopicButtonList>
        <CardList isShown={showTopic}>
            {topicList.map(({ _id, src, alt, title, text }) => {
                return (
                    <CardItem key={_id}>
                        <CardImage src={src} alt={alt} />
                        <CardTitle>{title}</CardTitle>
                        <CardText>{text.p1}</CardText>
                        <CardText>{text.p2}</CardText>
                        <CardText>{text.p3}</CardText>
                        <CardText>{text.p4}</CardText>
                        <CardText>{text.p5}</CardText>
                        <CardText>{text.p6}</CardText>
                        <CardButtonClose onClick={() => {
                            setShowTopic(false);
                            setTopicList(data);
                        }}>
                            <CloseIcon />
                        </CardButtonClose>
                            </CardItem>
                )})}
                        </CardList>
                    
        </TopicCardWrapper>
    )
}

const TopicCardWrapper = styled.div`
display: grid;
position: relative;
`

const TopicButtonList = styled.ul`
display: grid;
list-style: none;
padding: 0;
margin: 50px 0 0 0;
justify-self: center;
grid-template-columns: 1fr 1fr;
justify-items: center;
gap: 20px;
position: relative;

@media screen and (max-width: 960px) {
    margin: 40px 0 0 0;
    grid-template-columns: 1fr;
    gap: 15px;
}
`

const TopicButtonItem = styled.li`
display: grid;
gap: 15px;
position: relative;
`

const CardButtonOpen = styled.button`
background: #00354E;
border: none;
border-radius: 5px;
color: #dcdcdc;
font-size: 150%;
font-weight: 300;
width: 25vw;
height: 10vw;
padding: 10px;
opacity: 1;
transition: all 0.5s ease;
cursor: pointer;

@media screen and (max-width: 960px) {
    font-size: 120%;
    width: 80vw;
    height: 15vw;
}

${(props) =>
    props.isShown &&
    css`
      opacity: 0;
    transition: all 0.5s ease;
    `}
`

const CardList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
display: grid;
opacity: 0;
transition: all 0.5s ease;
position: absolute;
width: 50vw;
left: -100vw;
top: 50px;

@media screen and (max-width: 960px) {
    width: 80vw;
    left: -100vw;
}

${(props) =>
    props.isShown &&
    css`
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
      gap: 15px;
      left: 0;

      @media screen and (max-width: 960px) {
        left: 0;
}
    `}
`;

const CardItem = styled.li`
display: grid;
gap: 25px;
padding-bottom: 20px;

@media screen and (max-width: 960px) {
    gap: 15px;
}
`


const CardImage = styled.img`
width: 25vw;
border-radius: 50%;
justify-self: center;

@media screen and (max-width: 960px) {
    width: 50vw;
}
`

const CardTitle = styled.h2`
font-size: 150%;
font-weight: 300;
margin: 0;
padding: 0 0 5px 0;
border-bottom: solid 1px #009FE3;
`

const CardText = styled.p`
line-height: 130%;
font-weight: 300;
margin: 0;
text-align: justify;
hyphens: auto;
`

const CardButtonClose = styled.button`
background: none;
border: none;
padding: 0;
border-radius: 5px;
color: #dcdcdc;
position: absolute;
right: -10px;
top: -10px;
height: 48px;
width: 48px;
cursor: pointer;
`

const CloseIcon = styled(FaTimes)`
font-size: 300%;
`