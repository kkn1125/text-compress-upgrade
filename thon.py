def solution(s):
    lengths = []
    
    length = 1 # 단위 길이
    while length <= len(s): # 단위 길이가 문장보다 짧을 동안 반복!
        result = compress(length, s)
        print("result", result, len(result))
        lengths.append(len(result)) # 이 단위길이를 통해 압축한 문장의 길이를 길이들 배열에 넣어 준다
        length += 1
    
    return min(lengths) # 길이들 중 가장 짧은 것 출력


def compress(length, s): # 문자열 압축해주는 함수
    result = "" # 결과 문장
    current = s[0:length] # 첫 번째 단위 조각
    count = 1 # 첫 번째 단위 조각은 이미 한 번 등장했다.
    
    for i in range(length, len(s), length):
        snippet = s[i:i+length] # 지금 문장 조각
        if snippet == current:
            count += 1 # 단위 조각과 같으면, 횟수를 1개 올려 준다.
        else:
            if count > 1:
                result += str(count) # 1회보다 많이 반복됐다면, 결과 문장에 더해 준다 (이 문제의 규칙)
            count = 1 # 반복횟수 초기화
            result += current
            current = snippet # 단위문장 초기화 - 새로운 단위문장
    print("compress result", result, current, s, length)
    # 마지막으로 차 있는 부분 처리
    if count > 1:
        result += str(count)
    result += current
        
    return result


print(solution("testasastestbobotestbobo"))