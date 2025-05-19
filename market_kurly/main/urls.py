# main의 urls.py 작성
from django.urls import path
from django.contrib import admin
from main import views

app_name = 'main'
urlpatterns = [
    path('', views.mainpage, name='mainpage'),
    path('product/<int:product_id>/', views.product_detail, name="product_detail"),
    path('product/<int:product_id>/create_comment/', views.create_comment, name="create_comment"),
    path('delete_comment/<int:comment_id>/', views.delete_comment, name="delete_comment"),
]