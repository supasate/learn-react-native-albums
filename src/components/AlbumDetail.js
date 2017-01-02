import React from 'react'
import { Text } from 'react-native'
import Card from './Card'

const AlbumDetail = ({ album }) => (
  <Card>
    <Text>{album.title}</Text>
  </Card>
)

export default AlbumDetail
