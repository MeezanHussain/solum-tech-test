# Problem B: CargoCraft Fleet
# Type A: 4 propulsion units
# Type B: 6 propulsion units
# Find min and max possible number of crafts for n total units

def solve(n):
    # Impossible if odd or n=2 (can't make odd or 2 with 4s and 6s)
    if n % 2 == 1 or n == 2:
        return -1, -1
    
    # Minimum crafts: use Type B (6 units) as much as possible → ceil(n/6)
    # Maximum crafts: use Type A (4 units) as much as possible → floor(n/4)
    return (n + 5) // 6, n // 4

t = int(input())
for _ in range(t):
    n = int(input())
    mn, mx = solve(n)
    print(-1 if mn == -1 else f"{mn} {mx}")

