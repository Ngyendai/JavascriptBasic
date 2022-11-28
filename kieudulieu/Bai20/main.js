
// Cú pháp của reduce trong JavaScript ->   arr.reduce(callback[, initialValue])

//Ứng dụng của Reduce trong JavaScript
// Chuyển mảng 2 chiều thành mảng 1 chiều
// khai báo mảng rỗng để lưu kết quả
const allPosts = [];

// duyệt mảng các topics
for (let t = 0; t < topics.length; t++) {
  // lấy ra các posts với từng topic
  const posts = topics[t].posts;

  // sử dụng vòng lặp for để duyệt mảng posts
  for (let p = 0; p < posts.length; p++) {
    // lấy ra từng post
    const post = posts[p];

    // push vào mảng kết quả
    allPosts.push(post);
  }
}

// kết quả
console.log(allPosts);
/*
    [
        { postID: "id1", title: "title1" },
        { postID: "id2", title: "title2" },
        { postID: "id3", title: "title3" },
        { postID: "id4", title: "title4" }
    ]
    */
// giá trị tích lũy là mảng rỗng
acc = [];

// phần tử đang duyệt là một mảng
cur.posts = [
{ postID: 'id1', title: 'title1' },
{ postID: 'id2', title: 'title2' },
]

// thêm các posts của phần tử đang duyệt
// vào giá trị tích lũy hiện tại thành mảng mới
// rồi gán lại cho biến tích lũy acc
acc = [...acc, ...cur.posts] = [
{ postID: 'id1', title: 'title1' },
{ postID: 'id2', title: 'title2' },
]

- Với lượt tiếp theo:

// giá trị tích lũy hiện tại
acc = [
{ postID: 'id1', title: 'title1' },
{ postID: 'id2', title: 'title2' },
]

// phần tử đang duyệt
cur.posts = [
{ postID: 'id3', title: 'title3' },
{ postID: 'id4', title: 'title4' },
]

// thêm các posts của phần tử đang duyệt
// vào giá trị tích lũy hiện tại thành mảng mới
// rồi gán lại cho biến tích lũy acc
acc = [...acc, ...cur.posts] = [
{ postID: 'id1', title: 'title1' },
{ postID: 'id2', title: 'title2' },
{ postID: 'id3', title: 'title3' },
{ postID: 'id4', title: 'title4' },
]

//Chuyển array thành object theo giá trị của một thuộc tính

// hàm getPost
const getPost = (postID, posts) => {
  // dùng vòng lặp for để duyệt hết các bài viết
  for (let p = 0; p < posts.length; p++) {
    // lấy từng post
    const post = posts[p];

    // so sánh postID của từng post với tham số postID truyền vào
    if (post.postID === postID) {
      // nếu bằng thì trả về post hiện tại
      return post;
    }
  }

  // nếu không tìm thấy thì giá trị trả về mặc định là null
  return null;
};

const dictionary = posts.reduce((acc, cur) => {
  // lấy ra postID của từng phần tử
  const postID = cur.postID;

  // sử dụng cú pháp spread (...)
  // để tạo object mới chứa object tích lũy acc
  // và thuộc tính mới [postID]: cur
  return { ...acc, [postID]: cur };
}, {});