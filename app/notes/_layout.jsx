import  { Stack } from "expo-router";

const NoteLayout = () => {
  return (
        <Stack 
        screenOptions={{
            headerShown: false,
            animation: "fade",
            contentStyle: { backgroundColor: "#fff" },
            presentation: "modal",
        }}
    />
  )
}

export default NoteLayout;