# Gabi Apps 웹사이트 개발 계획

이 문서는 Hugo와 Congo 테마를 사용하여 Gabi Apps 웹사이트를 구축하기 위한 작업 목록을 정의합니다.

## 1. 기본 설정 (`hugo.toml`)

- **테마 설정:** `hugo.toml` 파일에 `theme = 'congo'`가 설정되어 있는지 확인합니다.
- **사이트 정보 설정:** 사이트의 `title`, `author`, `description` 등 기본 정보를 `hugo.toml` 파일에 추가합니다.
- **메인 메뉴 설정:** 사용자가 요청한 페이지(소개, 앱, 블로그, 기술지원)로 이동할 수 있도록 `hugo.toml`의 `menu.main`을 설정합니다.

  ```toml
  # hugo.toml 예시
  baseURL = "https://gabiapps.github.io"
  languageCode = "ko-kr"
  title = "Gabi Apps"
  theme = "congo"

  [author]
    name = "Your Name"
    # email = "your@email.com"

  [[menu.main]]
    name = "소개"
    pageRef = "/about"
    weight = 10
  [[menu.main]]
    name = "앱"
    pageRef = "/apps"
    weight = 20
  [[menu.main]]
    name = "블로그"
    pageRef = "/blog"
    weight = 30
  [[menu.main]]
    name = "기술지원"
    pageRef = "/support"
    weight = 40
  ```

## 2. 콘텐츠 페이지 생성

Congo 테마의 구조에 맞춰 각 페이지의 콘텐츠를 Markdown 파일로 생성합니다.

### 2.1. 소개 페이지

- `content/about.md` 파일을 생성합니다.
- 파일 상단에 다음과 같이 Front Matter를 추가하여 페이지 제목과 레이아웃을 지정합니다.
  ```markdown
  ---
  title: "소개"
  layout: "simple"
  ---

  여기에 자신에 대한 소개를 작성하세요.
  ```

### 2.2. 앱 목록 및 상세 페이지

1.  **앱 목록 페이지 생성:**
    - `content/apps/_index.md` 파일을 생성합니다.
    - 아래와 같이 Front Matter를 추가하여 앱 목록 페이지를 설정합니다. `layout: "list"`를 사용하면 해당 디렉토리의 모든 콘텐츠를 리스트 형태로 보여줍니다.
      ```markdown
      ---
      title: "앱"
      layout: "list"
      ---

      제가 만든 앱들을 소개합니다.
      ```

2.  **개별 앱 페이지 생성:**
    - 각 앱에 대한 Markdown 파일을 `content/apps/` 디렉토리 내에 생성합니다. (예: `content/apps/app-one.md`)
    - 각 파일에는 앱의 이름, 설명, 이미지 등 상세 정보를 Front Matter와 본문에 작성합니다.
      ```markdown
      ---
      title: "첫 번째 앱"
      date: 2024-01-01
      summary: "이 앱은 어떤 문제를 해결합니다."
      # cover: "images/app-one.png" # 앱 스크린샷 이미지 경로
      ---

      여기에 앱에 대한 상세 설명을 작성합니다.
      ```

### 2.3. 기술 블로그 목록 및 상세 페이지

1.  **블로그 목록 페이지 생성:**
    - `content/blog/_index.md` 파일을 생성합니다.
    - 앱 목록과 마찬가지로 `layout: "list"`를 사용하여 블로그 게시물 목록을 표시하도록 설정합니다.
      ```markdown
      ---
      title: "기술 블로그"
      layout: "list"
      ---

      개발 과정에서 얻은 지식과 경험을 공유합니다.
      ```

2.  **개별 블로그 게시물 생성:**
    - `content/blog/` 디렉토리 내에 각 게시물에 대한 Markdown 파일을 생성합니다. (예: `content/blog/my-first-post.md`)
    - Hugo의 `hugo new blog/my-first-post.md` 명령어를 사용하면 `archetypes/default.md`를 기반으로 파일을 쉽게 생성할 수 있습니다.
      ```markdown
      ---
      title: "첫 번째 블로그 글"
      date: 2024-01-02
      summary: "블로그를 시작하며..."
      ---

      여기에 블로그 내용을 작성합니다.
      ```

### 2.4. 기술지원 페이지

- `content/support.md` 파일을 생성합니다.
- `layout: "simple"`을 사용하여 간단한 정보 페이지로 만듭니다.
- 이메일 주소, 문의 폼(외부 서비스 연동 등) 등 기술지원을 위한 정보를 추가합니다.
  ```markdown
  ---
  title: "기술지원"
  layout: "simple"
  ---

  앱 사용 중 문제가 발생하거나 피드백이 있다면 아래 이메일로 연락주세요.

  **Email:** support@example.com
  ```

## 3. 홈페이지(`_index.md`) 커스터마이징

- `content/_index.md` 파일은 웹사이트의 첫 화면입니다.
- Congo 테마는 기본적으로 최근 게시물을 보여주도록 설정되어 있습니다.
- 홈페이지에 다른 내용을 표시하려면 `layouts/index.html` 파일을 프로젝트 루트의 `layouts/index.html`로 복사하여 수정해야 할 수 있습니다.
- 우선은 `_index.md`의 내용을 수정하여 간단한 소개 문구를 넣어봅니다.

  ```markdown
  ---
  title: "Gabi Apps에 오신 것을 환영합니다"
  ---

  Gabi Apps는 ...
  ```

## 4. 로컬에서 테스트 및 빌드

1.  **로컬 서버 실행:**
    - 터미널에서 `hugo server` 명령어를 실행하여 로컬에서 웹사이트가 어떻게 보이는지 확인합니다.
    - 브라우저에서 `http://localhost:1313`으로 접속하여 변경사항을 실시간으로 확인할 수 있습니다.

2.  **정적 파일 빌드:**
    - 웹사이트가 완성되면 `hugo` 명령어를 실행합니다.
    - `public/` 디렉토리에 웹사이트의 정적 파일들이 생성됩니다.

## 5. GitHub Pages에 배포

- `public/` 디렉토리의 내용을 GitHub Repository의 `gh-pages` 브랜치나 `<username>.github.io` Repository에 푸시하여 배포합니다.
- GitHub Actions를 설정하여 `main` 브랜치에 푸시할 때마다 자동으로 빌드 및 배포가 되도록 자동화할 수 있습니다. Congo 테마의 `.github/workflows/gh-pages.yml` 파일을 참고하여 설정할 수 있습니다.

이 계획에 따라 차근차근 진행하면 원하시는 웹사이트를 완성할 수 있을 것입니다.
