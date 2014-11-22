#1.简介
  1.支持下拉刷新，上拉加载
  
  2.简单易用，注释完整。
#2.demo源码(全)
```java
public class MainActivity extends Activity {
	//1.下拉刷新ListView（用于设置属性）
	PullToRefreshListView list;
	//2.载入时显示的Layout（以实现友好提示）
	private ILoadingLayout loadingLayout;
	//3.显示内容的ListView（用于显示内容）
	private ListView listview;
	
	@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        list=(PullToRefreshListView)this.findViewById(R.id.list);
        //设置上下拉模式（还有其他模式）
        list.setMode(Mode.BOTH);
        //返回一个代理对象,允许您调用方法的所有LoadingLayouts(视图显示当拉/刷新)。
        loadingLayout=list.getLoadingLayoutProxy();
        loadingLayout.setLastUpdatedLabel("");
		loadingLayout.setPullLabel(getString(R.string.pull_to_refresh_bottom_pull));//继续拖动
		loadingLayout.setRefreshingLabel(getString(R.string.pull_to_refresh_bottom_refreshing));//正在获取..
		loadingLayout.setReleaseLabel(getString(R.string.pull_to_refresh_bottom_release));//正在获取..
        
		//1.设置滑动监听
		list.setOnScrollListener(new OnScrollListener() {
			
			@Override
			public void onScrollStateChanged(AbsListView view, int scrollState) {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public void onScroll(AbsListView view, int firstVisibleItem,int visibleItemCount, int totalItemCount) {
				//初始化：上拉和下拉
				if (firstVisibleItem == 0) {
					loadingLayout.setLastUpdatedLabel("");
					loadingLayout.setPullLabel(getString(R.string.pull_to_refresh_top_pull));//下拉刷新
					loadingLayout.setRefreshingLabel(getString(R.string.pull_to_refresh_top_refreshing));//加载中....
					loadingLayout.setReleaseLabel(getString(R.string.pull_to_refresh_top_release));//释放刷新
				} else if (firstVisibleItem + visibleItemCount + 1 == totalItemCount) {
					loadingLayout.setLastUpdatedLabel("");
					loadingLayout.setPullLabel(getString(R.string.pull_to_refresh_bottom_pull));//继续拖动
					loadingLayout.setRefreshingLabel(getString(R.string.pull_to_refresh_bottom_refreshing));//正在获取..
					loadingLayout.setReleaseLabel(getString(R.string.pull_to_refresh_bottom_release));//正在加载更多..
				}
				
			}
		});
		
		//2. 下拉刷新监听
		list.setOnRefreshListener(new OnRefreshListener2<ListView>() {

					@Override
					public void onPullDownToRefresh(
							PullToRefreshBase<ListView> refreshView) {
						// 0.下拉刷新(从第一页开始装载数据)
						//queryData(0, STATE_REFRESH);
						Toast.makeText(MainActivity.this, "下拉刷新(从第一页开始装载数据)", Toast.LENGTH_LONG).show();
						list.onRefreshComplete();
					}

					@Override
					public void onPullUpToRefresh(
							PullToRefreshBase<ListView> refreshView) {
						// 0.上拉加载更多(加载下一页数据)
						//queryData(curPage, STATE_MORE);
						Toast.makeText(MainActivity.this, "上拉加载更多(加载下一页数据)", Toast.LENGTH_LONG).show();
						list.onRefreshComplete();
					}
				});
		
		//3.获取listview
		listview=list.getRefreshableView();
		//4.可设置适配器listview.setAdapter(new firstListAdapter(this));
    }
}
```
Android开发部落交流群：430049289
