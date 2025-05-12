from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
    id                =   models.AutoField(primary_key=True)
    name              =   models.CharField(max_length=50)
    description       =   models.CharField(max_length=50)
    origin_price      =   models.IntegerField()
    discount_price    =   models.IntegerField()
    discount_rate     =   models.IntegerField()
    category          =   models.ManyToManyField('Category')
    notice            =   models.CharField(max_length=200)
    image_url         =   models.URLField(max_length=2000)

    def summary(self):
        return self.description[:20]
    
    def __str__(self):
        return self.name
    
    class Meta:
        db_table    = 'products'

class Category(models.Model):
    name            =   models.CharField(max_length=45)

    def __str__(self):
        return self.name
    class Meta:
        db_table    = 'categories'

class ProductComment(models.Model):
    id              = models.AutoField(primary_key=True)
    user            = models.ForeignKey(User, on_delete=models.CASCADE)
    product         = models.ForeignKey('Product', on_delete=models.CASCADE)
    star            = models.IntegerField()
    content         = models.TextField()
    created_at      = models.DateTimeField(auto_now=True)

    class Meta:
        db_table    = 'product_comments'
