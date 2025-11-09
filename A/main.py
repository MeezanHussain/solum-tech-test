# Problem A: Mystic Waves
# Pattern: x, -x, x, -x, ...
# If n is even: pairs cancel out (x + (-x) = 0) → result = 0
# If n is odd: one extra x remains → result = x

t = int(input())
for _ in range(t):
    x, n = map(int, input().split())
    if n % 2 == 0:
        print(0)
    else:
        print(x)
