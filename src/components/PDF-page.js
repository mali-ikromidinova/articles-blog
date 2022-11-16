/* import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: "blue",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
});

function DocumentPage() {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Selected Article Info</Text>
            <h1>{title}</h1>
            <h2>Author: {author}</h2>
            <h3>{createdAt}</h3>
            <h3>Category: {topic}<h3>
            <p>{body}</p>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default DocumentPage;
 */
