from typing import List

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # Initialize two pointers for the beginning and end of the list
        l, r = 0, len(nums) - 1
        
        # Continue searching while the left pointer is less than or equal to the right pointer
        while l <= r:
            # Calculate the midpoint to divide the array into halves
            i = (r + l) // 2  # Corrected calculation of midpoint
            
            # Get the value at the midpoint
            n = nums[i]
            
            # If the target is greater than the midpoint value, discard the left half
            if target > n:
                l = i + 1
            # If the target is less than the midpoint value, discard the right half
            elif target < n:
                r = i - 1
            # If the target is equal to the midpoint value, return the index
            else:
                return i
        
        # If the target is not found, return -1
        return -1
