// screens/TicketsScreen.tsx

import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { Ticket } from "../types/types";
import BASE_URL from "../service/config";
import TicketCard from "../components/TicketCard";
import TicketModal from "../components/TicketModal";

type TicketsScreenProps = NativeStackScreenProps<RootStackParamList, "Tickets">;

const TicketsScreen: React.FC<TicketsScreenProps> = ({ navigation }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      const token = await AsyncStorage.getItem("token");
      try {
        const response = await axios.get(
          `${BASE_URL}/api/tickets/mis_tickets`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  const handleTicketDetail = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleEditTicket = () => {
    // Implementar lógica para editar el ticket
    console.log("Editar ticket:", selectedTicket);
  };

  const handleDeleteTicket = () => {
    // Implementar lógica para eliminar el ticket
    console.log("Eliminar ticket:", selectedTicket);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tickets Screen</Text>
      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TicketCard ticket={item} onPress={() => handleTicketDetail(item)} />
        )}
      />
      <TicketModal
        ticket={selectedTicket}
        visible={modalVisible}
        onClose={handleCloseModal}
        onEdit={handleEditTicket}
        onDelete={handleDeleteTicket}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default TicketsScreen;
