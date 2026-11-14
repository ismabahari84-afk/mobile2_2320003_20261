import { StyleSheet } from "react-native";
export const homeStyles = StyleSheet.create({
safeArea: {
flex: 1,
backgroundColor: "#FFF7FA",
},
scrollContainer: {
flex: 1,
backgroundColor: "#FFF7FA",
},
scrollContent: {
padding: 20,
gap: 16,
},
welcomeCard: {
backgroundColor: "#FFFFFF",
borderRadius: 18,
padding: 20,
borderWidth: 1,
borderColor: "#FBCFE8",
shadowColor: "#831843",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.05,
shadowRadius: 12,
elevation: 2,
},
statusBadge: {
alignSelf: "flex-start",
flexDirection: "row",
alignItems: "center",
gap: 6,
backgroundColor: "#ECFDF5",
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 999,
marginBottom: 10,
},
statusBadgeText: {
    fontSize: 11.5,
    fontWeight: "700",
    color: "#059669",
  },
  greetingTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#500724",
  },
  greetingEmail: {
    fontSize: 13.5,
    color: "#DB2777",
    fontWeight: "600",
    marginTop: 2,
  },
  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#FBCFE8",
    shadowColor: "#831843",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  menuHeader: {
    marginBottom: 16,
  },
  menuSectionTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#500724",
  },
  menuSectionSubtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 18,
  },
  menuItem: {
    width: "30%",
    alignItems: "center",
  },
  menuIconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  menuLabel: {
    fontSize: 11.5,
    fontWeight: "700",
    color: "#831843",
textAlign: "center",
marginTop: 6,
},
iconBgBlue: {
backgroundColor: "#FDF2F8",
borderColor: "#FBCFE8",
},
iconBgGreen: {
backgroundColor: "#FAF5FF",
borderColor: "#E9D5FF",
},
iconBgAmber: {
backgroundColor: "#FFF7ED",
borderColor: "#FED7AA",
},
iconBgTeal: {
backgroundColor: "#ECFEFF",
borderColor: "#A5F3FC",
},
iconBgRose: {
backgroundColor: "#FFF1F2",
borderColor: "#FECDD3",
},
});