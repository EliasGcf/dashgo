import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Elias Gabriel</Text>
          <Text color="gray.300" fontSize="small">
            elias.gabriel@rocketseat.team
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Elias Gabriel"
        src="https://github.com/EliasGcf.png"
      />
    </Flex>
  );
}
