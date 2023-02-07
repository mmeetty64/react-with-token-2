import React, { FC, useEffect, useState } from 'react'
import Service from '../../../Services/Service';
import { IProps } from '../../../Interfaces/Components.interfaces';
import { Card, ListGroup } from 'react-bootstrap';



export const ViewWhiteList: FC<IProps> = ({address}) => {
    
    const [whiteList, setWhiteList] = useState<string[]>([])

    useEffect(()=> {
        (async() => {
            const viewWhite: string[] = await Service.viewReqWhiteList(address)
            setWhiteList(viewWhite)
        })()
    }, [whiteList])
    
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
            {whiteList.map((el) =>
                <div key={el}>
                    <ListGroup.Item>{el}</ListGroup.Item>
                </div>
            )}
        </ListGroup>
        </Card>
    </div>
  )
}
