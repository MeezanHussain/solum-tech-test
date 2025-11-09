# Problem B: CargoCraft Fleet

## Problem Description
CargoCraft company has two types of transport vehicles:
- **Type A**: 4 propulsion units per craft
- **Type B**: 6 propulsion units per craft

Given `n` total propulsion units, find:
- **Minimum** number of crafts possible
- **Maximum** number of crafts possible
- If impossible, output `-1`

## Solution Explanation

### Key Insights:
1. **Both 4 and 6 are even** → n must be even for any valid combination
2. **Cannot make n=2** → minimum achievable is 4
3. **GCD(4, 6) = 2** → we can make any even number ≥ 4 using combinations of 4s and 6s
4. **For MINIMUM crafts** → use Type B (6 units) as much as possible → **ceil(n/6)**
5. **For MAXIMUM crafts** → use Type A (4 units) as much as possible → **floor(n/4)**

###  Mathematical Solution:

**Impossibility Check:**
- If `n` is odd → **impossible** (both types have even units)
- If `n = 2` → **impossible** (minimum is 4)

**Minimum Crafts:**
- Use as many 6-unit crafts as possible
- Formula: **min = ⌈n/6⌉ = (n + 5) // 6**
- Reasoning: We want fewer crafts, so maximize use of the larger unit (6)

**Maximum Crafts:**
- Use as many 4-unit crafts as possible  
- Formula: **max = ⌊n/4⌋ = n // 4**
- Reasoning: We want more crafts, so maximize use of the smaller unit (4)

**Why This Works:**
- Since GCD(4,6) = 2, any even number can be expressed as 4a + 6b
- When n%4 ≠ 0, we automatically need some Type B crafts, but floor(n/4) already accounts for the maximum possible Type A crafts
- When n%6 ≠ 0, we automatically need some Type A crafts, but ceil(n/6) already accounts for the minimum total crafts

**Time Complexity**: O(1) per test case - just arithmetic operations  
**Space Complexity**: O(1)

## How to Run

### Method 1: Using Input File (Recommended)
1. Create a file `input.txt` with test cases
2. Run: `python main.py < input.txt`

### Method 2: Direct Command Line Input
Run: `python main.py`  
Then paste the input and press Enter, then Ctrl+Z (Windows) or Ctrl+D (Unix)

### Method 3: Inline Input (Unix/Linux/Mac)
```bash
python main.py << EOF
4
4
7
24
998244353998244352
EOF
```

## Example

**Input:**
```
4
4
7
24
998244353998244352
```

**Output:**
```
1 1
-1
4 6
166374058999707392 249561088499561088
```

**Explanation:**

**Test 1: n = 4**
- Only option: 1 Type A craft (4×1 = 4)
- Min = Max = 1

**Test 2: n = 7**
- 7 is odd, can't be made with even numbers (4, 6)
- Output: -1

**Test 3: n = 24**
- Minimum (use Type B): 4 Type B (6×4 = 24)
- Maximum (use Type A): 6 Type A (4×6 = 24)
- Other valid: 3 Type A + 2 Type B (3×4 + 2×6 = 24)
- Output: 4 6

**Test 4: n = 998244353998244352**
- n % 6 = 0 → Min = 998244353998244352 / 6 = 166374058999707392
- n % 4 = 0 → Max = 998244353998244352 / 4 = 249561088499561088


