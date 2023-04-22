#[no_mangle]
pub extern fn find_nth(n:i32) -> i32 {
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
    let result = find_nth(0);
    assert_eq!(result, 0);
}

#[test]
fn test_first_position() {
    let result = find_nth(1);
    assert_eq!(result, 1);
}

#[test]
fn test_second_position() {
    let result = find_nth(2);
    assert_eq!(result, 1);
}

#[test]
fn test_third_position() {
    let result = find_nth(3);
    assert_eq!(result, 2);
}

#[test]
fn test_fourth_position() {
    let result = find_nth(4);
    assert_eq!(result, 3);
}

#[test]
fn test_twentieth_position() {
    let result = find_nth(20);
    assert_eq!(result, 6765);
}