import styled, { css } from 'styled-components';
import data from '../data/data';
import { useState } from 'react';

export default function TopicCards () {
const [showTopic, setShowTopic] = useState(false);
const [topicList, setTopicList] = useState(data);

    return (
        <TopicCardList>
            {topicList.map(({ _id, button, src, alt, title, text }) => {
                return (
                    <TopicCardItem key={_id}>
                        <CardButtonOpen onClick={() => {
                             setTopicList((topicList) =>
                             topicList.filter(
                               (topic) => topic._id === _id
                             )
                           );
                            setShowTopic(!showTopic);
                        }}>{button}</CardButtonOpen>
                        <HiddenWrapper isShown={showTopic}>
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
                        }}>X</CardButtonClose>
                        </HiddenWrapper>
                    </TopicCardItem>
                )
            })}
        </TopicCardList>
    )
}

const TopicCardList = styled.ul`
display: grid;
justify-self: center;
gap: 20px;
`

const TopicCardItem = styled.li`
display: grid;
gap: 15px;
`

const CardButtonOpen = styled.button`
background: #00354E;
border: none;
border-radius: 5px;
color: #dcdcdc;
font-size: 150%;
font-weight: 300;
width: 25vw;
`

const HiddenWrapper = styled.div`
display: none;
opacity: 0;
transition: all 0.5s ease;
position: absolute;
width: 25vw;

${(props) =>
    props.isShown &&
    css`
      display: grid;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
      gap: 15px;
    `}
`;


const CardImage = styled.img`
width: 25vw;
`

const CardTitle = styled.h2`
font-size: 150%;
font-weight: 300;
margin: 0;
`

const CardText = styled.p`
line-height: 130%;
font-weight: 300;
margin: 0;
text-align: justify;
hyphens: auto;
`

const CardButtonClose = styled.button`
background: #00354E;
border: none;
border-radius: 5px;
color: #dcdcdc;
font-size: 150%;
font-weight: 300;
`