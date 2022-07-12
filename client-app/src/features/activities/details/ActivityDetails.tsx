import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Card from 'semantic-ui-react/dist/commonjs/views/Card';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity
    cancelSelectActivity: () => void;
}


export default function ActivityDetails({activity, cancelSelectActivity}: Props){
    return (
    <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
        <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
                <span>{activity.date}</span>
            </Card.Meta>
            <Card.Description>
                {activity.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button.Group widths='2'>
                <Button basic color='blue' content='Edit' />
                <Button onClick={cancelSelectActivity} basic color='grey' content='Cancel' />
            </Button.Group>
        </Card.Content>
      </Card>
    )
}