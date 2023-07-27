import { StyleSheet } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const ItemCards = ({ title, subtitle, bodyTitle, bodyContent }) => {
  return (
    <Card style={styles.container}>
      <Card.Title title={title} subtitle={subtitle} left={LeftContent} />
      <Card.Content style={styles.cardBody}>
        <Text variant="titleLarge" style={styles.cardBodyTitle}>
          {bodyTitle}
        </Text>
        <Text variant="bodyMedium">{bodyContent}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  cardBody: {
    alignItems: 'center',
    fontStyle: 'italic',
    padding: 10,
  },
  cardBodyTitle: {
    color: 'green',
    padding: 2,
  },
});

export default ItemCards;
