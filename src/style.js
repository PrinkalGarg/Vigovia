// styles.js
import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.4,
    position: "relative",
  },
  hotelInfo: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  },

  /* --- HEADER --- */
  logo: {
    width: 120,
    alignSelf: "center",
    marginBottom: 12,
  },

  banner: {
    backgroundColor: "#6D5DF6",
    color: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 14,
    textAlign: "center",
  },

  greeting: { fontSize: 18, fontWeight: "bold" },
  subtitle: { fontSize: 14, marginTop: 3 },
  subsubtitle: { fontSize: 12, marginTop: 2 },

  /* --- JOURNEY DETAILS --- */
  detailsBox: {
    border: "1px solid #ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 14,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  /* --- DAYS --- */
  daySection: {
    marginBottom: 12,
    borderBottom: "1px solid #eee",
    paddingBottom: 8,
  },

  dayHeader: {
    flexDirection: "row",
    alignItems: "stretch",
  },

  dayLabelBox: {
    width: 32,
    backgroundColor: "#4B0082",
    borderRadius: 4,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  dayLabel: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },

  dayContent: {
    flex: 1,
    flexDirection: "row",
  },

  activityImage: {
    width: 90,
    height: 90,
    borderRadius: 4,
  },

  slots: {
    flex: 1,
    paddingLeft: 10,
  },

  slotTitle: {
    fontWeight: "bold",
    fontSize: 9,
    marginBottom: 2,
    textTransform: "capitalize",
  },

  bullet: {
    fontSize: 8,
    marginBottom: 2,
  },

  /* --- FOOTER --- */
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    fontSize: 8,
    color: "#777",
    textAlign: "center",
  },
});