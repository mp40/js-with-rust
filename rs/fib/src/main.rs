fn main(n:i128) -> i128 {
    if n == 0 {
        return 0;
    }

    if n < 3 {
        return 1;
    }

    let mut prev2 = 1;
    let mut prev1 = 1;
    let mut index = 3;

    while index < n {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
        index += 1;
    }

    return prev1 + prev2;
}

#[test]
fn test_zero_position() {
    let result = main(0);
    assert_eq!(result, 0);
}

#[test]
fn test_first_position() {
    let result = main(1);
    assert_eq!(result, 1);
}

#[test]
fn test_second_position() {
    let result = main(2);
    assert_eq!(result, 1);
}

#[test]
fn test_third_position() {
    let result = main(3);
    assert_eq!(result, 2);
}

#[test]
fn test_fourth_position() {
    let result = main(4);
    assert_eq!(result, 3);
}

#[test]
fn test_twentieth_position() {
    let result = main(20);
    assert_eq!(result, 6765);
}