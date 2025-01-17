// 缓存常用数据结构
const states = [
  { full: "Alabama", abbr: "AL" },
  { full: "Alaska", abbr: "AK" },
  { full: "Arizona", abbr: "AZ" },
  { full: "Arkansas", abbr: "AR" },
  { full: "California", abbr: "CA" },
  { full: "Colorado", abbr: "CO" },
  { full: "Connecticut", abbr: "CT" },
  { full: "Delaware", abbr: "DE" },
  { full: "Florida", abbr: "FL" },
  { full: "Georgia", abbr: "GA" },
  { full: "Hawaii", abbr: "HI" },
  { full: "Idaho", abbr: "ID" },
  { full: "Illinois", abbr: "IL" },
  { full: "Indiana", abbr: "IN" },
  { full: "Iowa", abbr: "IA" },
  { full: "Kansas", abbr: "KS" },
  { full: "Kentucky", abbr: "KY" },
  { full: "Louisiana", abbr: "LA" },
  { full: "Maine", abbr: "ME" },
  { full: "Maryland", abbr: "MD" },
  { full: "Massachusetts", abbr: "MA" },
  { full: "Michigan", abbr: "MI" },
  { full: "Minnesota", abbr: "MN" },
  { full: "Mississippi", abbr: "MS" },
  { full: "Missouri", abbr: "MO" },
  { full: "Montana", abbr: "MT" },
  { full: "Nebraska", abbr: "NE" },
  { full: "Nevada", abbr: "NV" },
  { full: "New Hampshire", abbr: "NH" },
  { full: "New Jersey", abbr: "NJ" },
  { full: "New Mexico", abbr: "NM" },
  { full: "New York", abbr: "NY" },
  { full: "North Carolina", abbr: "NC" },
  { full: "North Dakota", abbr: "ND" },
  { full: "Ohio", abbr: "OH" },
  { full: "Oklahoma", abbr: "OK" },
  { full: "Oregon", abbr: "OR" },
  { full: "Pennsylvania", abbr: "PA" },
  { full: "Rhode Island", abbr: "RI" },
  { full: "South Carolina", abbr: "SC" },
  { full: "South Dakota", abbr: "SD" },
  { full: "Tennessee", abbr: "TN" },
  { full: "Texas", abbr: "TX" },
  { full: "Utah", abbr: "UT" },
  { full: "Vermont", abbr: "VT" },
  { full: "Virginia", abbr: "VA" },
  { full: "Washington", abbr: "WA" },
  { full: "West Virginia", abbr: "WV" },
  { full: "Wisconsin", abbr: "WI" },
  { full: "Wyoming", abbr: "WY" }
]

// 创建状态查找映射，优化查找性能
const stateMap = new Map(states.map(state => [state.abbr, state]))

// 缓存州坐标数据
const stateCoordinates = {
  "AL": [{ lat: 32.377716, lng: -86.300568 }, { lat: 33.520661, lng: -86.802490 }],
    "AK": [{ lat: 61.216583, lng: -149.899597 }, { lat: 58.301598, lng: -134.419998 }],
    "AZ": [{ lat: 33.448376, lng: -112.074036 }, { lat: 34.048927, lng: -111.093735 }],
    "AR": [{ lat: 34.746483, lng: -92.289597 }, { lat: 36.082157, lng: -94.171852 }],
    "CA": [{ lat: 36.778259, lng: -119.417931 }, { lat: 34.052235, lng: -118.243683 }],
    "CO": [{ lat: 39.739235, lng: -104.990250 }, { lat: 38.833881, lng: -104.821365 }],
    "CT": [{ lat: 41.763710, lng: -72.685097 }, { lat: 41.308273, lng: -72.927887 }],
    "DE": [{ lat: 39.739072, lng: -75.539787 }, { lat: 38.774055, lng: -75.139351 }],
    "FL": [{ lat: 30.332184, lng: -81.655647 }, { lat: 25.761681, lng: -80.191788 }],
    "GA": [{ lat: 33.749001, lng: -84.387985 }, { lat: 32.083541, lng: -81.099831 }],
    "HI": [{ lat: 21.306944, lng: -157.858337 }, { lat: 19.896767, lng: -155.582779 }],
    "ID": [{ lat: 43.615021, lng: -116.202316 }, { lat: 47.677683, lng: -116.780466 }],
    "IL": [{ lat: 41.878113, lng: -87.629799 }, { lat: 40.633125, lng: -89.398529 }],
    "IN": [{ lat: 39.768402, lng: -86.158066 }, { lat: 41.593369, lng: -87.346427 }],
    "IA": [{ lat: 41.586834, lng: -93.625000 }, { lat: 42.500000, lng: -94.166672 }],
    "KS": [{ lat: 39.099728, lng: -94.578568 }, { lat: 37.687176, lng: -97.330055 }],
    "KY": [{ lat: 38.252666, lng: -85.758453 }, { lat: 37.839333, lng: -84.270020 }],
    "LA": [{ lat: 30.695366, lng: -91.187393 }, { lat: 29.951065, lng: -90.071533 }],
    "ME": [{ lat: 44.310623, lng: -69.779490 }, { lat: 43.661471, lng: -70.255325 }],
    "MD": [{ lat: 38.978447, lng: -76.492180 }, { lat: 39.290386, lng: -76.612190 }],
    "MA": [{ lat: 42.360081, lng: -71.058884 }, { lat: 42.313373, lng: -71.057083 }],
    "MI": [{ lat: 42.732536, lng: -84.555534 }, { lat: 42.331429, lng: -83.045753 }],
    "MN": [{ lat: 44.953703, lng: -93.089958 }, { lat: 44.977753, lng: -93.265015 }],
    "MS": [{ lat: 32.298756, lng: -90.184807 }, { lat: 32.366806, lng: -88.703705 }],
    "MO": [{ lat: 38.576702, lng: -92.173516 }, { lat: 38.627003, lng: -90.199402 }],
    "MT": [{ lat: 46.878717, lng: -113.996586 }, { lat: 45.783287, lng: -108.500690 }],
    "NE": [{ lat: 41.256538, lng: -95.934502 }, { lat: 40.813618, lng: -96.702595 }],
    "NV": [{ lat: 39.163914, lng: -119.767403 }, { lat: 36.114647, lng: -115.172813 }],
    "NH": [{ lat: 43.208137, lng: -71.538063 }, { lat: 42.995640, lng: -71.454789 }],
    "NJ": [{ lat: 40.058323, lng: -74.405663 }, { lat: 39.364285, lng: -74.422928 }],
    "NM": [{ lat: 35.084385, lng: -106.650421 }, { lat: 32.319939, lng: -106.763653 }],
    "NY": [{ lat: 40.712776, lng: -74.005974 }, { lat: 43.299427, lng: -74.217933 }],
    "NC": [{ lat: 35.779591, lng: -78.638176 }, { lat: 35.227085, lng: -80.843124 }],
    "ND": [{ lat: 46.825905, lng: -100.778275 }, { lat: 46.877186, lng: -96.789803 }],
    "OH": [{ lat: 39.961178, lng: -82.998795 }, { lat: 41.499321, lng: -81.694359 }],
    "OK": [{ lat: 35.467560, lng: -97.516426 }, { lat: 36.153980, lng: -95.992775 }],
    "OR": [{ lat: 44.046236, lng: -123.022029 }, { lat: 45.505917, lng: -122.675049 }],
    "PA": [{ lat: 40.273191, lng: -76.886701 }, { lat: 39.952583, lng: -75.165222 }],
    "RI": [{ lat: 41.824009, lng: -71.412834 }, { lat: 41.580095, lng: -71.477429 }],
    "SC": [{ lat: 34.000710, lng: -81.034814 }, { lat: 32.776474, lng: -79.931051 }],
    "SD": [{ lat: 44.366787, lng: -100.353760 }, { lat: 43.544595, lng: -96.731103 }],
    "TN": [{ lat: 36.162663, lng: -86.781601 }, { lat: 35.149532, lng: -90.048981 }],
    "TX": [{ lat: 30.267153, lng: -97.743057 }, { lat: 29.760427, lng: -95.369804 }],
    "UT": [{ lat: 40.760780, lng: -111.891045 }, { lat: 37.774929, lng: -111.920414 }],
    "VT": [{ lat: 44.260059, lng: -72.575386 }, { lat: 44.475883, lng: -73.212074 }],
    "VA": [{ lat: 37.540726, lng: -77.436050 }, { lat: 36.852924, lng: -75.977982 }],
    "WA": [{ lat: 47.606209, lng: -122.332069 }, { lat: 47.252876, lng: -122.444290 }],
    "WV": [{ lat: 38.349820, lng: -81.632622 }, { lat: 39.629527, lng: -79.955896 }],
    "WI": [{ lat: 43.073051, lng: -89.401230 }, { lat: 43.038902, lng: -87.906471 }],
    "WY": [{ lat: 41.140259, lng: -104.820236 }, { lat: 44.276569, lng: -105.507391 }],
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { searchParams } = new URL(request.url)
  const state = searchParams.get('state') || getRandomState()
  const stateInfo = stateMap.get(state) || { full: state, abbr: state }
  
  let address, name, gender, phone
  const country = 'US'

  try {
    // 优化地址获取逻辑
    address = await getAddress(state)
    if (!address) {
      return new Response(
        generateErrorHTML('暂时无法获取地址，请稍后再试。'),
        { 
          headers: { 
            'content-type': 'text/html;charset=UTF-8',
            'cache-control': 'no-store' 
          }
        }
      )
    }

    // 获取用户数据
    const userData = await getUserData()
    if (userData) {
      ({ name, gender, phone } = userData)
    } else {
      name = getRandomName()
      gender = "Unknown"
      phone = getRandomPhoneNumber(country, state)
    }

    const html = generateHTML(stateInfo, name, gender, phone, address)
    return new Response(html, {
      headers: { 
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 'public, max-age=0' 
      }
    })
  } catch (error) {
    console.error('处理请求时发生错误:', error)
    return new Response(
      generateErrorHTML('生成地址时发生错误，请重试。'),
      { 
        headers: { 
          'content-type': 'text/html;charset=UTF-8',
          'cache-control': 'no-store' 
        }
      }
    )
  }
}

// 优化地址获取函数
async function getAddress(state) {
  const maxRetries = 3;  // 最大重试次数
  const retryDelay = 1000;  // 重试延迟时间（毫秒）

  // 重试函数
  const retry = async (fn, retriesLeft) => {
    try {
      return await fn();
    } catch (error) {
      if (retriesLeft === 0) {
        console.error('最终获取地址失败:', error);
        throw error;
      }
      console.log(`获取地址失败，剩余重试次数: ${retriesLeft}，等待重试...`);
      await new Promise(resolve => setTimeout(resolve, retryDelay));
      return retry(fn, retriesLeft - 1);
    }
  };

  // 获取地址的主要逻辑
  const getAddressAttempt = async () => {
    for (let i = 0; i < 20; i++) {
      const location = getRandomLocationInState(state);
      if (!location) {
        console.log('无法获取州的位置信息');
        continue;
      }

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lng}&zoom=18&addressdetails=1`,
          { 
            headers: { 
              'User-Agent': 'Cloudflare Worker Address Generator',
              'Accept-Language': 'en-US,en;q=0.9'
            },
            cf: {
              cacheTtl: 300,  // 缓存5分钟
              cacheEverything: true
            }
          }
        );

        if (!response.ok) {
          console.log(`API响应错误: ${response.status}`);
          continue;
        }

        const data = await response.json();
        if (!data?.address) {
          console.log('地址数据无效');
          continue;
        }

        if (data.address.country_code?.toLowerCase() === 'us' && 
            data.address.house_number && 
            data.address.road && 
            data.address.city) {
          return formatAddress(data.address, state, 'US');
        } else {
          console.log('地址不符合要求，重试中...');
        }
      } catch (error) {
        console.error('获取地址时发生错误:', error);
        continue;
      }
    }
    throw new Error('无法获取有效地址');
  };

  try {
    return await retry(getAddressAttempt, maxRetries);
  } catch (error) {
    console.error('所有重试都失败了:', error);
    return null;
  }
}

// 优化用户数据获取
async function getUserData() {
  try {
    const response = await fetch('https://randomuser.me/api/')
    if (!response.ok) return null
    
    const data = await response.json()
    const user = data?.results?.[0]
    if (!user) return null

    return {
      name: `${user.name.first} ${user.name.last}`,
      gender: user.gender.charAt(0).toUpperCase() + user.gender.slice(1),
      phone: getRandomPhoneNumber('US', user.location.state)
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
    return null
  }
}

// 优化 HTML 生成函数
function generateHTML(stateInfo, name, gender, phone, address) {
  // 预处理数据，避免重复计算
  const [firstName, lastName] = name.split(' ')
  const addressParts = address.split(',').map(part => part.trim())
  const [street, city, state, zipCode, country] = addressParts

  return `<!DOCTYPE html>
  <html>
  <head>
    <title>美国地址生成器</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <style>${getStyles()}</style>
  </head>
  <body>
    <div class="title">美国地址生成器</div>
    
    <!-- 添加广告容器 -->
    <div class="ad-container-left"></div>
    <div class="ad-container-right"></div>
    
    <div class="layout-container">
      <div class="generator-container">
        <div class="container">
          <div class="state-select">
            <label for="state">选择州:</label>
            <select id="state" onchange="changeState(this.value)">
              ${getStateOptions(stateInfo.abbr)}
            </select>
            <button class="refresh-btn" onclick="window.location.reload();">生成新地址</button>
            <button onclick="showSaveDialog()">保存地址</button>
          </div>         

          <div id="saveDialog" class="modal">
            <div class="modal-content">
              <h3>保存地址</h3>
              <input type="text" id="note" placeholder="添加备注（可选）">
              <div class="modal-buttons">
                <button onclick="saveAddress()">确认</button>
                <button onclick="closeSaveDialog()">取消</button>
              </div>
            </div>
          </div>
          
          <div class="copied" id="copied">已复制!</div>
          
          ${generateInfoRows({
            '姓': lastName,
            '名': firstName,
            '性别': gender,
            '电话': phone,
            '街道': street,
            '城市': city,
            '州': state,
            '州全称': stateInfo.full,
            '邮编': zipCode,
            '国家': country,
            '完整地址': address
          })}
          
          <div class="map-container">
            <div id="map-loading">地图加载中...</div>
            <iframe class="map" 
              src="https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed"
              onload="this.style.display='block';document.getElementById('map-loading').style.display='none';"
              onerror="handleMapError()"
              style="display:none">
            </iframe>
          </div>

          <div class="disclaimer">
            本地址仅供学习和测试使用，请不要将本地址生成器用于非法用途。
          </div>
        </div>
      </div>
      
      <div class="saved-addresses">
        <h3>已保存的地址</h3>
        <div class="saved-table-container">
          <table class="saved-table">
            <thead>
              <tr>
                <th>备注</th>
                <th>姓名</th>
                <th>性别</th>
                <th>电话</th>
                <th>地址</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody id="savedAddressesBody">
            </tbody>
          </table>
        </div>
        <button class="export-btn" onclick="exportToCSV()">保存为CSV</button>
        
        <div class="usage-guide">
          <h4>使用说明</h4>
          <ul>
            <li>点击"生成新地址"按钮可随机生成新的地址信息</li>
            <li>可以通过下拉菜单选择特定的州</li>
            <li>点击信息行可以复制对应的内容</li>
            <li>点击"保存地址"可以保存当前地址，可选添加备注</li>
            <li>已保存的地址可以导出为CSV文件</li>
            <li>地图显示当前生成地址的大致位置</li>
          </ul>
        </div>
      </div>
    </div>
  
    <script>${getJavaScript(name, gender, phone, address)}</script>
  </body>
  </html>`
}

// 优化信息行生成
function generateInfoRows(data) {
  return `<div class="info-container">
    ${Object.entries(data)
      .map(([label, value]) => `
        <div class="info-row">
          <span class="info-label">${label}:</span>
          <span class="info-value" onclick="copyToClipboard('${value}', event)">${value}</span>
        </div>
      `)
      .join('')}
  </div>`
}

// 优化样式生成，使用常量避免重复字符串
function getStyles() {
  return `
    :root {
      --primary: #28a745;
      --primary-hover: #218838;
      --secondary: #6c757d;
      --background: #f8f9fa;
      --surface: #ffffff;
      --text: #333333;
      --text-secondary: #666666;
      --border: #dee2e6;
      --shadow: rgba(0, 0, 0, 0.1);
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --primary: #2ea44f;
        --primary-hover: #3cb371;
        --secondary: #8b949e;
        --background: #0d1117;
        --surface: #161b22;
        --text: #c9d1d9;
        --text-secondary: #8b949e;
        --border: #30363d;
        --shadow: rgba(0, 0, 0, 0.3);
      }
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background-color: var(--background);
      color: var(--text);
      line-height: 1.5;
      transition: background-color 0.3s, color 0.3s;
    }

    .title {
      text-align: center;
      font-size: 2rem;
      margin: 2rem 0;
      color: var(--text);
    }

    .layout-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      padding: 0 2rem;
      max-width: 1400px;  /* 从1600px改为1400px */
      margin: 0 auto;
      position: relative;
    }

    .generator-container, .saved-addresses {
      background: var(--surface);
      border-radius: 10px;
      box-shadow: 0 2px 8px var(--shadow);
      padding: 2rem;
      height: fit-content;
    }

    .state-select {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    select, button, input {
      padding: 0.5rem 1rem;
      border-radius: 6px;
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--text);
      font-size: 1rem;
      transition: all 0.2s;
    }

    select {
      flex: 1;
      min-width: 200px;
    }

    button {
      background: var(--primary);
      color: white;
      border: none;
      cursor: pointer;
      font-weight: 500;
      white-space: nowrap;
    }

    button:hover {
      background: var(--primary-hover);
      transform: translateY(-1px);
    }

    .info-container {
      display: grid;
      gap: 0.5rem;
      margin: 1rem 0;
    }

    .info-row {
      display: flex;
      padding: 0.5rem;
      background: var(--background);
      border-radius: 4px;
      align-items: center;
    }

    .info-label {
      font-weight: 600;
      min-width: 80px;
      color: var(--text-secondary);
    }

    .info-value {
      flex: 1;
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    .info-value:hover {
      background: var(--border);
    }

    .map-container {
      position: relative;
      width: 100%;
      height: 400px;
      margin: 1.5rem 0;
      border-radius: 10px;
      border: 1px solid var(--border);
      background: var(--background);
    }

    .map {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 10px;
    }

    #map-loading {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--text-secondary);
    }

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal-content {
      background: var(--surface);
      padding: 2rem;
      border-radius: 10px;
      width: 90%;
      max-width: 400px;
      box-shadow: 0 4px 20px var(--shadow);
    }

    .modal h3 {
      margin-bottom: 1rem;
      color: var(--text);
    }

    .modal input {
      width: 100%;
      margin-bottom: 1rem;
    }

    .modal-buttons {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .copied {
      position: fixed;
      background: var(--primary);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      z-index: 1000;
      box-shadow: 0 2px 8px var(--shadow);
      display: none;
    }

    .saved-addresses {
      display: flex;
      flex-direction: column;
    }

    .saved-addresses h3 {
      margin-bottom: 1rem;
      color: var(--text);
    }

    .saved-table-container {
      flex: 1;
      overflow-y: auto;
      margin: 1rem 0;
      border: 1px solid var(--border);
      border-radius: 6px;
      max-height: 600px; /* 限制高度，约显示7条记录 */
    }

    .saved-table {
      width: 100%;
      border-collapse: collapse;
    }

    .saved-table th,
    .saved-table td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid var(--border);
    }

    .saved-table th {
      font-weight: 600;
      color: var(--text-secondary);
      position: sticky;
      top: 0;
      background: var(--surface);
      z-index: 1;
    }

    .delete-btn {
      background: #dc3545;
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
    }

    .delete-btn:hover {
      background: #c82333;
    }

    .export-btn {
      margin-top: 1rem;
    }

    .usage-guide {
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);
    }

    .usage-guide h4 {
      color: var(--text);
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .usage-guide ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .usage-guide li {
      color: var(--text-secondary);
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
      padding-left: 1.2rem;
      position: relative;
    }

    .usage-guide li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--primary);
    }

    .disclaimer {
      text-align: center;
      padding: 1rem;
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-top: 1rem;
      border-top: 1px solid var(--border);
    }

    @media (max-width: 768px) {
      body {
        padding: 0;
      }

      .title {
        font-size: 1.5rem;
        margin: 1rem 0;
      }

      .layout-container {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 0;
      }

      .generator-container, .saved-addresses {
        padding: 1rem;
        border-radius: 0;
      }

      .map-container {
        height: 200px;
        margin: 1rem 0;
      }

      .map {
        height: 200px;
      }

      .saved-table {
        display: block;
        width: 100%;
      }

      .saved-table thead {
        display: none;
      }

      .saved-table tbody tr {
        display: block;
        width: 100%;
        margin-bottom: 1rem;
        border: 1px solid var(--border);
        border-radius: 6px;
        padding: 0.5rem;
      }

      .saved-table td {
        display: block;
        width: 100%;
        text-align: right;
        padding: 0.25rem 0;
        border: none;
        white-space: normal;
        word-break: break-word;
      }

      .saved-table td::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        color: var(--text-secondary);
      }

      .saved-table td[data-label="地址"] {
        padding: 0.5rem 0;
        line-height: 1.4;
      }

      .usage-guide {
        margin-top: 1rem;
        padding: 1rem;
      }

      .usage-guide li {
        font-size: 0.9rem;
        margin-bottom: 0.75rem;
      }

      .state-select {
        flex-direction: column;
        gap: 0.75rem;
      }

      .state-select select {
        width: 100%;
      }

      .state-select button {
        width: 100%;
        height: 44px;
        font-size: 16px;
        margin-top: 0.5rem;
      }
    }

    .success-message {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--primary);
      color: white;
      padding: 12px 24px;
      border-radius: 6px;
      z-index: 1000;
      box-shadow: 0 2px 8px var(--shadow);
      animation: fadeInOut 2s ease-in-out forwards;
    }

    @keyframes fadeInOut {
      0% { opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { opacity: 0; }
    }

    /* 添加广告位样式 */
    .ad-container-left,
    .ad-container-right {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      width: 160px;  /* 标准广告尺寸 */
      height: 600px;  /* 标准广告尺寸 */
    }

    .ad-container-left {
      left: calc((100% - 1400px) / 2 - 180px);  /* 左侧广告位 */
    }

    .ad-container-right {
      right: calc((100% - 1400px) / 2 - 180px);  /* 右侧广告位 */
    }

    /* 在小屏幕上隐藏广告 */
    @media (max-width: 1560px) {
      .ad-container-left,
      .ad-container-right {
        display: none;
      }
    }
  `
}

// 优化 JavaScript 生成函数
function getJavaScript(name, gender, phone, address) {
  const safeData = {
    name: escapeHtml(name),
    gender: escapeHtml(gender),
    phone: escapeHtml(phone),
    address: escapeHtml(address)
  }

  return `
    ;(function() {
      let initialized = false;
      
      const elements = {
        copied: document.getElementById('copied'),
        saveDialog: document.getElementById('saveDialog'),
        note: document.getElementById('note'),
        savedAddressesBody: document.getElementById('savedAddressesBody')
      }

      // 辅助函数
      function escapeHtml(unsafe) {
        return unsafe
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;")
      }

      // 首先定义数据访问函数
      function getSavedAddresses() {
        try {
          const saved = localStorage.getItem('savedAddresses')
          return saved ? JSON.parse(saved) : []
        } catch (e) {
          console.error('读取保存的地址失败:', e)
          return []
        }
      }

      function updateSavedAddressesTable() {
        if (!elements.savedAddressesBody) {
          throw new Error('找不到保存地址的表格元素');
        }

        const addresses = getSavedAddresses();
        console.log('获取到保存的地址:', addresses);

        const rows = addresses.length === 0 
          ? '<tr><td colspan="6" style="text-align: center;">暂无保存的地址</td></tr>'
          : addresses.map((addr, index) => 
              '<tr>' +
                '<td>' + escapeHtml(addr.note) + '</td>' +
                '<td>' + escapeHtml(addr.name) + '</td>' +
                '<td>' + escapeHtml(addr.gender) + '</td>' +
                '<td>' + escapeHtml(addr.phone) + '</td>' +
                '<td>' + escapeHtml(addr.fullAddress) + '</td>' +
                '<td>' +
                  '<button class="delete-btn" onclick="deleteAddress(' + index + ')">删除</button>' +
                '</td>' +
              '</tr>'
            ).join('');
        
        elements.savedAddressesBody.innerHTML = rows;
      }

      function initializeTable() {
        if (initialized) return;
        if (!elements.savedAddressesBody) {
          console.error('表格元素未找到，等待DOM加载...');
          return;
        }

        try {
          updateSavedAddressesTable();
          initialized = true;
          console.log('表格初始化成功');
        } catch (error) {
          console.error('表格初始化失败:', error);
        }
      }

      // 复制功能
      window.copyToClipboard = async function(text, event) {
        try {
          await navigator.clipboard.writeText(text)
          const rect = event.target.getBoundingClientRect()
          
          elements.copied.style.display = 'block'
          elements.copied.style.position = 'fixed'
          elements.copied.style.top = (rect.top - 30) + 'px'
          elements.copied.style.left = (rect.left + rect.width/2 - 40) + 'px'
          
          setTimeout(() => {
            elements.copied.style.display = 'none'
          }, 1500)
        } catch (err) {
          console.error('复制失败:', err)
        }
      }

      // 其他窗口操作函数
      window.changeState = function(state) {
        window.location.href = '?state=' + encodeURIComponent(state)
      }

      window.showSaveDialog = function() {
        elements.saveDialog.style.display = 'flex'
        elements.note.value = ''
        elements.note.focus()
      }

      window.closeSaveDialog = function() {
        elements.saveDialog.style.display = 'none'
      }

      // 保存和删除功能
      window.saveAddress = function() {
        const note = document.getElementById('note').value.trim()
        const addresses = getSavedAddresses()
        
        // 检查是否存在相同地址
        const isDuplicate = addresses.some(addr => addr.fullAddress === '${escapeHtml(address)}')
        if (isDuplicate) {
          showMessage('已存在相同地址', 'warning')
          return
        }

        addresses.push({
          note: note || '无备注',
          name: '${escapeHtml(name)}',
          gender: '${escapeHtml(gender)}',
          phone: '${escapeHtml(phone)}',
          fullAddress: '${escapeHtml(address)}'
        })
        
        localStorage.setItem('savedAddresses', JSON.stringify(addresses))
        updateSavedAddressesTable()
        closeSaveDialog()
        showMessage('保存成功')
      }

      window.deleteAddress = function(index) {
        const savedAddresses = getSavedAddresses()
        savedAddresses.splice(index, 1)
        localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses))
        updateSavedAddressesTable()
      }

      // 初始化表格
      document.addEventListener('DOMContentLoaded', initializeTable);
      
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initializeTable();
      }
      
      const observer = new MutationObserver((mutations, obs) => {
        if (elements.savedAddressesBody) {
          initializeTable();
          obs.disconnect();
        }
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      
      setTimeout(initializeTable, 100);

      // 事件监听器
      elements.note.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
          saveAddress()
        }
      })

      window.onclick = function(event) {
        if (event.target === elements.saveDialog) {
          closeSaveDialog()
        }
      }

      // 添加导出CSV功能
      window.exportToCSV = function() {
        try {
          const addresses = getSavedAddresses()
          if (addresses.length === 0) {
            alert('没有可导出的地址')
            return
          }

          // CSV 表头
          const headers = ['备注', '姓名', '性别', '电话', '地址']
          
          // 转换数据为CSV格式
          const csvContent = [
            headers.join(','),
            ...addresses.map(addr => [
              addr.note,
              addr.name,
              addr.gender,
              addr.phone,
              addr.fullAddress
            ].map(field => \`"\${field.replace(/"/g, '""')}"\`).join(','))
          ].join('\\n')

          // 创建Blob对象
          const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { 
            type: 'text/csv;charset=utf-8;' 
          })
          
          // 创建下载链接
          const link = document.createElement('a')
          link.href = URL.createObjectURL(blob)
          link.download = '保存的地址_' + new Date().toLocaleDateString() + '.csv'
          
          // 触发下载
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } catch (error) {
          console.error('导出CSV失败:', error)
          alert('导出失败，请重试')
        }
      }

      // 添加地图错误处理函数
      window.handleMapError = function() {
        const mapContainer = document.querySelector('.map-container')
        const loadingEl = document.getElementById('map-loading')
        if (loadingEl) {
          loadingEl.textContent = '地图加载失败'
        }
        const iframe = document.querySelector('.map')
        if (iframe) {
          iframe.style.display = 'none'
        }
      }

      // 添加地图超时检测
      setTimeout(() => {
        const iframe = document.querySelector('.map')
        if (iframe && iframe.style.display === 'none') {
          handleMapError()
        }
      }, 10000) // 10秒超时

      // 恢复原来的表格更新函数
      function updateSavedAddressesTable() {
        if (!elements.savedAddressesBody) return;
        
        const addresses = getSavedAddresses();
        const isMobile = window.innerWidth <= 768;

        const rows = addresses.length === 0 
          ? '<tr><td colspan="6" style="text-align: center;">暂无保存的地址</td></tr>'
          : addresses.map((addr, index) => {
              if (isMobile) {
                return \`
                  <tr>
                    <td data-label="备注">\${escapeHtml(addr.note)}</td>
                    <td data-label="姓名">\${escapeHtml(addr.name)}</td>
                    <td data-label="性别">\${escapeHtml(addr.gender)}</td>
                    <td data-label="电话">\${escapeHtml(addr.phone)}</td>
                    <td data-label="地址">\${escapeHtml(addr.fullAddress)}</td>
                    <td data-label="操作">
                      <button class="delete-btn" onclick="deleteAddress(\${index})">删除</button>
                    </td>
                  </tr>
                \`
              } else {
                return \`
                  <tr>
                    <td>\${escapeHtml(addr.note)}</td>
                    <td>\${escapeHtml(addr.name)}</td>
                    <td>\${escapeHtml(addr.gender)}</td>
                    <td>\${escapeHtml(addr.phone)}</td>
                    <td>\${escapeHtml(addr.fullAddress)}</td>
                    <td>
                      <button class="delete-btn" onclick="deleteAddress(\${index})">删除</button>
                    </td>
                  </tr>
                \`
              }
            }).join('');
        
        elements.savedAddressesBody.innerHTML = rows;
      }

      // 添加窗口大小变化监听
      window.addEventListener('resize', updateSavedAddressesTable);

      // 添加消息提示函数
      function showMessage(text, type = 'success') {
        const msg = document.createElement('div')
        msg.className = 'success-message'
        if (type === 'warning') {
          msg.style.background = '#dc3545'
        }
        msg.textContent = text
        document.body.appendChild(msg)
        setTimeout(() => msg.remove(), 2000)
      }
    })()
  `
}

// 辅助函数：HTML转义
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

// 辅助函数：获取随机州
function getRandomState() {
  return states[Math.floor(Math.random() * states.length)].abbr
}

// 辅助函数：获取随机位置
function getRandomLocationInState(state) {
  const coords = stateCoordinates[state]
  if (!coords) return null
  
  const randomCity = coords[Math.floor(Math.random() * coords.length)]
  return {
    lat: randomCity.lat + (Math.random() - 0.5) * 0.1,
    lng: randomCity.lng + (Math.random() - 0.5) * 0.1
  }
}

// 辅助函数：格式化地址
function formatAddress(address, state, country) {
  if (!address.house_number || !address.road || !address.city) {
    return null
  }
  
  return `${address.house_number} ${address.road}, ${address.city}, ${state}, ${address.postcode}, United States`
}

function getRandomPhoneNumber(country, state) {
  const areaCodesUS = {
    "AL": ["205", "251", "256", "334", "938"],
    "AK": ["907"],
    "AZ": ["480", "520", "602", "623", "928"],
    "AR": ["479", "501", "870"],
    "CA": ["209", "213", "310", "323", "408", "415", "424", "510", "530", "559", "562", "619", "626", "650", "661", "707", "714", "760", "805", "818", "831", "858", "909", "916", "925", "949"],
    "CO": ["303", "719", "720", "970"],
    "CT": ["203", "475", "860", "959"],
    "DE": ["302"],
    "FL": ["239", "305", "321", "352", "386", "407", "561", "727", "754", "772", "786", "813", "850", "863", "904", "941", "954"],
    "GA": ["229", "404", "470", "478", "678", "706", "762", "770", "912"],
    "HI": ["808"],
    "ID": ["208", "986"],
    "IL": ["217", "224", "309", "312", "331", "618", "630", "708", "773", "779", "815", "847", "872"],
    "IN": ["219", "260", "317", "463", "574", "765", "812", "930"],
    "IA": ["319", "515", "563", "641", "712"],
    "KS": ["316", "620", "785", "913"],
    "KY": ["270", "364", "502", "606", "859"],
    "LA": ["225", "318", "337", "504", "985"],
    "ME": ["207"],
    "MD": ["240", "301", "410", "443", "667"],
    "MA": ["339", "351", "413", "508", "617", "774", "781", "857", "978"],
    "MI": ["231", "248", "269", "313", "517", "586", "616", "734", "810", "906", "947", "989"],
    "MN": ["218", "320", "507", "612", "651", "763", "952"],
    "MS": ["228", "601", "662", "769"],
    "MO": ["314", "417", "573", "636", "660", "816", "975"],
    "MT": ["406"],
    "NE": ["308", "402", "531"],
    "NV": ["702", "725", "775"],
    "NH": ["603"],
    "NJ": ["201", "551", "609", "732", "848", "856", "862", "908", "973"],
    "NM": ["505", "575"],
    "NY": ["212", "315", "332", "347", "516", "518", "585", "607", "631", "646", "680", "716", "718", "838", "845", "914", "917", "929", "934"],
    "NC": ["252", "336", "704", "743", "828", "910", "919", "980", "984"],
    "ND": ["701"],
    "OH": ["216", "234", "283", "330", "380", "419", "440", "513", "567", "614", "740", "937"],
    "OK": ["405", "539", "580", "918"],
    "OR": ["458", "503", "541", "971"],
    "PA": ["215", "267", "272", "412", "484", "570", "610", "717", "724", "814", "835", "878"],
    "RI": ["401"],
    "SC": ["803", "839", "843", "854", "864"],
    "SD": ["605"],
    "TN": ["423", "615", "629", "731", "865", "901", "931"],
    "TX": ["210", "214", "254", "281", "325", "346", "409", "430", "432", "469", "512", "682", "713", "737", "806", "817", "830", "832", "903", "915", "936", "940", "956", "972", "979"],
    "UT": ["385", "435", "801"],
    "VT": ["802"],
    "VA": ["276", "434", "540", "571", "703", "757", "804"],
    "WA": ["206", "253", "360", "425", "509"],
    "WV": ["304", "681"],
    "WI": ["262", "414", "534", "608", "715", "920"],
    "WY": ["307"]
  }

  let areaCodeList = []
  if (country === 'US') {
    areaCodeList = areaCodesUS[state] || [
      "202", "212", "312", "404", "415", "503", "602", "617", "713", "818"
    ]
  }
  
  const areaCode = areaCodeList[Math.floor(Math.random() * areaCodeList.length)]
  const exchangeCode = Math.floor(200 + Math.random() * 700).toString().padStart(3, '0')
  const lineNumber = Math.floor(1000 + Math.random() * 9000).toString().padStart(4, '0')
  
  return `(${areaCode}) ${exchangeCode}-${lineNumber}`
}

function getRandomName() {
  const firstNames = [
    // 常见英文名
    "James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles",
    "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen",
    // 西班牙裔名
    "Jose", "Luis", "Carlos", "Juan", "Miguel", "Maria", "Ana", "Sofia", "Isabella", "Carmen",
    // 亚裔名
    "Wei", "Li", "Zhang", "Liu", "Chen", "Yuki", "Hiroshi", "Jin", "Min", "Soo",
    // 非裔名
    "DeShawn", "Malik", "Tyrone", "Jamal", "Andre", "Latoya", "Ebony", "Shaniqua", "Aaliyah", "Precious"
  ]
  
  const lastNames = [
    // 常见英文姓
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    // 西班牙裔姓
    "Rodriguez", "Garcia", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Perez", "Sanchez", "Ramirez", "Torres",
    // 亚裔姓
    "Wang", "Li", "Zhang", "Chen", "Liu", "Yang", "Kim", "Park", "Lee", "Nguyen",
    // 非裔姓
    "Washington", "Jefferson", "Jackson", "Banks", "Freeman", "Robinson", "Brooks", "Jenkins", "Howard", "Powell"
  ]
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
  return `${firstName} ${lastName}`
}

// 添加 getStateOptions 函数
function getStateOptions(selectedState) {
  return states.map(state => 
    `<option value="${state.abbr}" ${state.abbr === selectedState ? 'selected' : ''}>
      ${state.full} (${state.abbr})
     </option>`
  ).join('')
}

// 添加错误页面生成函数
function generateErrorHTML(message) {
  return `<!DOCTYPE html>
  <html>
  <head>
    <title>美国地址生成器 - 错误</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>${getStyles()}</style>
  </head>
  <body>
    <div class="title">美国地址生成器</div>
    <div class="error-container">
      <div class="error-message">${message}</div>
      <button onclick="window.location.reload()">重试</button>
    </div>
  </body>
  </html>`
}
