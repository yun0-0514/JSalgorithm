/*장르 별로 가장 많이 재새된 노래를
두 개씩 모아 베스트 앨범 출시 예정

노래는 고유 번호로 구분

수록 기준
1.속한 노래가 많이 재생된 장르 먼저 수록
2.장르 내에서 많이 재생된 노래를 먼저 수록
3.장르 내에서 재생 횟수가 같은 노래 중에서는  고유번호가 낮은 노래를 먼저 수록

주어지는 
문자열 배열 장르 :genres
노래별 재생 횟수 정수배열:Plays

고유 번호를 순서대로 return 하도록 하는 함수 만들기
genres[i]는 고유번호가 i인 노래의 장르입니다.
plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.*/

function solution(genres, plays) {
  const answer = []; // 1. 빈 배열로 초기화
  const genreToIds = new Map(); 
  const genreToTotalPlays = new Map(); 

  genres.forEach((genre, idx) => {

    genreToTotalPlays.set(genre, (genreToTotalPlays.get(genre) || 0) + plays[idx]);
    
    if (!genreToIds.has(genre)) genreToIds.set(genre, []);
    genreToIds.get(genre).push(idx);
  });

  const genreArray = [...genreToTotalPlays.entries()]
    .sort((a, b) => b[1] - a[1]) 
    .map((entry) => entry[0]);

  genreArray.forEach((genre) => {
    const idxList = genreToIds.get(genre);
    
 
    idxList.sort((a, b) => {
      if (plays[b] === plays[a]) return a - b;
      return plays[b] - plays[a]; 
    });
    
    answer.push(...idxList.slice(0, 2));
  });

  return answer;
}
