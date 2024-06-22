class MyHashMap:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.data = {}  # Dictionary to store key-value pairs

    def put(self, key: int, value: int) -> None:
        """
        Value will always be non-negative.
        Add the (key, value) pair to the hashmap. If the key already exists, update the corresponding value.
        """
        self.data[key] = value  # Add or update the key-value pair in the dictionary

    def get(self, key: int) -> int:
        """
        Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
        """
        if key in self.data:  # Check if the key exists in the dictionary
            return self.data[key]  # Return the corresponding value
        else:
            return -1  # Return -1 if the key does not exist

    def remove(self, key: int) -> None:
        """
        Remove the mapping for the specified key if this map contains a mapping for the key.
        """
        if key in self.data:  # Check if the key exists in the dictionary
            del self.data[key]  # Remove the key-value pair from the dictionary

# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key, value)
# param_2 = obj.get(key)
# obj.remove(key)
