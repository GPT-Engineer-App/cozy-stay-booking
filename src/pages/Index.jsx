import { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Select, Box, Image, IconButton } from "@chakra-ui/react";
import { FaSearch, FaCalendarAlt, FaUser } from "react-icons/fa";

const Index = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    // Implement search logic here
    console.log("Searching for hotels in", destination, "from", checkInDate, "to", checkOutDate, "for", guests, "guests");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Hotel Booking Engine
        </Text>
        <Image src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5fGVufDB8fHx8MTcxNzE5NjM3Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Hotel Lobby" borderRadius="md" boxSize="300px" objectFit="cover" />
        <VStack spacing={4} width="100%">
          <Input placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
          <HStack spacing={4} width="100%">
            <Input type="date" placeholder="Check-in Date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
            <Input type="date" placeholder="Check-out Date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
          </HStack>
          <HStack spacing={4} width="100%">
            <Select value={guests} onChange={(e) => setGuests(e.target.value)}>
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1} Guest{num > 0 && "s"}
                </option>
              ))}
            </Select>
            <IconButton aria-label="Guests" icon={<FaUser />} />
          </HStack>
          <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={handleSearch}>
            Search
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
